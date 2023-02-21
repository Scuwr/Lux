import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import {ConfirmationService, MessageService} from 'primeng/api';


import { MainService } from './main.services';
import { mermaid_utils } from './mermaid_utils'
import { mainActions, selectAllStories, selectMainState, selectSelectedStory, selectSideNavStatus } from '../ngrx/main.reducer';
import { Subject } from 'rxjs';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit  {
  @ViewChild('mermaidmain', { static: true }) mermaidDiv: ElementRef;
  @ViewChildren('storyRow', { read: ElementRef }) rowElement: QueryList<ElementRef>;
  @ViewChild('edgeDialogInp2') edgeDialogInp2: ElementRef; // to change focus

  private readonly ngDestroyed$ = new Subject<void>();

  user = {
    key: null,
    id: null,
    name: null
  }

  selectedStory = null;
  sidenavVisible = true;
  storyVisible = true;
  keyboardCaptureElement = null; // prevent KB shortcuts if selected element

  dialogues = {
    username: {
      display: true,
      input: null
    },
    rename: {
      display: false,
      input: null,
      node: null,
      abstract: false,
      hypothetical: false,
    },
    newNode: {
      display: false,
      input: null,
      connectedNode: null,
      abstract: false,
      hypothetical: false,
    },
    newEdge: {
      display: false,
      node1: null,
      node2: null,
      physical: true,
    },
    help: {
      display: false,
    }
  }

  allStories = null

  graph = {
    node_names: [{
      name: '',
      abstract: false,
      hypothetical: false,
    }],
    edges: [{
      edge: [],
      physical: true,
    }],
    comments: '',
    confusing: false,
  }

  graphSinceLastSave = {}

  graphHistory = {
    undo: [],
    redo: []
  }

  graphStyle = {
    clicked: null,
    edgeClicked: null,
    LR: true,
    labels: false,
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,

    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private store: Store,

    private mainService: MainService,
  ) {

  }

  async ngAfterViewInit(){
    window['app'] = this
    window['mermaid_utils'] = mermaid_utils
    mermaid_utils.init()
    this.update()

    this.store.select(selectSideNavStatus)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(status => {
      this.sidenavVisible = status
      this.cdr.detectChanges()
    })

    //this.store.select(selectAllStories)
      //.pipe(takeUntil(this.ngDestroyed$))
      //.subscribe(v => this.allStories = v)

    this.store.select(selectMainState)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(state => {
      switch (state.action) {
        case mainActions.setKeyboardFocudEle.type:
          this.onFocusKeyboardElement(state.payload)
          break;

        case mainActions.setSelectedStory.type:
          if (!this.user.name || (!!state.selectedStory && state.selectedStory.key == this.selectedStory?.key)) {
            break
          }
          this.setSelectedStory(state.selectedStory)
          break
      
        default:
          break;
      }
    })

    setTimeout(() => {
      this.check_params_username()
    }, 0);
  }

  onDocsModeButton() {
    this.router.navigate(['/docs/GettingStarted'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  onViewModeButton() {
    this.router.navigate(['/view'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  onSettingsModeButton(){
    this.router.navigate(['/settings'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  check_params_username() {
    this.route.queryParams.pipe(
      first()
    ).subscribe((params) => {
      if (!!params.username) { // username found in url parameters, login
        this.dialogues.username.input = params.username
        this.username_confirm()
      }
    })
  }

  async username_confirm() {
    this.dialogues.username.input = this.dialogues.username.input.toLowerCase();
    this.dialogues.username.input = this.dialogues.username.input.replaceAll(/[^a-z0-9]*/g, '')
    if (this.dialogues.username.input.length == 0) {
      this.messageService.add({severity:'error', summary:'Error', detail:'Username invalid.'})
      return
    }
    let res = await this.mainService.usersLogin(this.dialogues.username.input, 'asrs').toPromise()
    let userkey = res['resp']
    if (userkey.length == 0){
      this.messageService.add({severity:'error', summary:'Error', detail:'Username invalid.'})
      return
    }

    this.user.key = userkey
    this.user.id = userkey.split(':')[2]
    this.user.name = this.dialogues.username.input
    this.dialogues.username.display = false;

    if (!this.allStories) {  // FETCH STORIES
      await this.fetch_stories()
    }

    // set username in url
    setTimeout(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {username: this.user.name}, 
        queryParamsHandling: 'merge'
      })
    }, 0);
    
    // fetch storyid from url
    this.route.queryParams.pipe(
        first()
      ).subscribe(async (params) => {
        if (!!params.storyId) {
          const id = params.storyId
          let match = this.allStories?.filter(s => s.key == id)
          // if no match, show story is it exists
          if (match?.length < 1){
            await this.add_story_to_sidenav(id)
            match = this.allStories?.filter(s => s.key == id)
          }
          this.store.dispatch(mainActions.setSelectedStory({ selectedStory: match[0] }))
        }
      })
  }

  async add_story_to_sidenav(id){
    let data = await this.mainService.storyGet(id).toPromise()
    
    const story = {
      text: data['resp'],
      key: id
    }
    if (data['resp']){
      let stories = [...this.allStories]
      stories.push(story)
      this.allStories = stories
      this.store.dispatch(mainActions.setAllStories({allStories: stories}))
      this.store.dispatch(mainActions.PopLoader())
    }     
  }

  async fetch_stories(){
    this.store.dispatch(mainActions.PushLoader())
    this.mainService.telemetryAdd(this.user.name, 'login').subscribe((resp) => {})
    let res = await this.mainService.storyGetAssigned(this.user.id).toPromise()
    
    const result = []
    for (const idx in res['key']){
      result.push({
        text: res['data'][idx],
        key: res['key'][idx]
      })
    }

    result.sort((a, b) => {
      if (parseInt(a.key) > parseInt(b.key)) {
        return 1
      }
      if (parseInt(a.key) < parseInt(b.key)) {
        return -1
      }
      return 0
    })

    this.allStories = result
    this.store.dispatch(mainActions.setAllStories({allStories: result}))
    this.store.dispatch(mainActions.PopLoader())
  }

  async register_user(){
    this.dialogues.username.input = this.dialogues.username.input.toLowerCase();
    this.dialogues.username.input = this.dialogues.username.input.replaceAll(/[^a-z0-9]*/g, '')
    if (this.dialogues.username.input.length == 0) {
      this.messageService.add({severity:'error', summary:'Error', detail:'Username invalid.'})
      return
    }
    
    let res = await this.mainService.usersLogin(this.dialogues.username.input, 'asrs').toPromise()
    if (res['resp'].length != 0){
      this.messageService.add({severity:'error', summary:'Error', detail:'Username already exists!'})
      return
    }

    await this.mainService.usersAdd(this.dialogues.username.input, 'asrs').toPromise()
    await this.username_confirm()
    await this.mainService.storyAddAssignment(this.user.id, '1').toPromise()
    
    this.router.navigate(['/docs/Welcome'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  toolbar_new_node() {
    let conn = null
    if (!!this.graphStyle.clicked) {
      conn = Number(this.graphStyle.clicked)+1
      this.setClickedNode(null)
      this.update()
    }

    this.dialogues.newNode.input = ''
    this.dialogues.newNode.connectedNode = !!conn ? conn : ''
    this.dialogues.newNode.abstract = false
    this.dialogues.newNode.hypothetical = false
    this.dialogues.newNode.display = true
  }

  toolbar_new_edge() {
    let conn = null
    if (!!this.graphStyle.clicked) {
      conn = Number(this.graphStyle.clicked)+1
      this.setClickedNode(null)
      this.update()
      setTimeout(() => {
        this.edgeDialogInp2.nativeElement.focus()
      }, 50);
    }

    this.dialogues.newEdge.node1 = !!conn ? conn : ''
    this.dialogues.newEdge.node2 = ''
    this.dialogues.newEdge.physical = true
    this.dialogues.newEdge.display = true
  }

  toolbar_rename() {
    if (!this.graphStyle.clicked) {
      return
    }
    let conn = Number(this.graphStyle.clicked)
    this.setClickedNode(null)
    this.update()

    const current_node_name = this.graph.node_names[conn].name
    this.dialogues.rename.input = current_node_name
    this.dialogues.rename.display = true
    this.dialogues.rename.node = conn
    this.dialogues.rename.abstract = this.graph.node_names[conn].abstract
    this.dialogues.rename.hypothetical = this.graph.node_names[conn].hypothetical
}

  private sanitize_input(node_name) {
    const reg = '0-9 a-z A-Z' + // alphanumeric
      '\-' + // dashes (must not have space after dash)
      '\& \' . ,' // other characters
    const matchReg = new RegExp('^[' + reg + ']+$')
    const replaceReg = new RegExp('[^' + reg + ']', 'g')
    if (!node_name.match(matchReg)) {
      this.messageService.add({severity:'warn', summary:'Name Sanitized', detail:'Name contains invalid characters that were removed'})
      node_name = node_name.replaceAll(replaceReg, '')
    }
    return node_name
  }

  toolbar_rename_confirm() {
    this.dialogues.rename.display = false
    this.dialogues.rename.input = this.sanitize_input(this.dialogues.rename.input)
    if (this.dialogues.rename.input.length < 1){
      this.messageService.add({severity:'error', summary:'Invalid Node Name', detail:'Name must contain at least one valid character'})
      return
    }
    this.graph.node_names[this.dialogues.rename.node].name = this.dialogues.rename.input
    this.graph.node_names[this.dialogues.rename.node].abstract = this.dialogues.rename.abstract
    this.graph.node_names[this.dialogues.rename.node].hypothetical = this.dialogues.rename.hypothetical
    this.save_and_update()
  }

  toolbar_new_node_confirm() {
    this.dialogues.newNode.display = false
    this.dialogues.newNode.input = this.sanitize_input(this.dialogues.newNode.input)
    if (this.dialogues.newNode.input.length < 1){
      this.messageService.add({severity:'error', summary:'Invalid Node Name', detail:'Name must contain at least one valid character'})
      return
    }
    const node = {
      name: this.dialogues.newNode.input,
      abstract: this.dialogues.newNode.abstract,
      hypothetical: this.dialogues.newNode.hypothetical,
    }
    const newNodeId = mermaid_utils.addNode(this.graph, node)
    const conn = Number(this.dialogues.newNode.connectedNode + '') - 1
    if (conn >= 0) {
      this.addEdge(conn, newNodeId, true)
    } else if (newNodeId >= 1) { // connect to last new node unless its the only node in the graph
      this.addEdge(newNodeId-1, newNodeId, true)
    }
    this.save_and_update()
  }

  toolbar_new_edge_confirm(event, gotonext) {
    if (!!gotonext) { // go to next input box
      event.srcElement.parentElement.nextElementSibling.firstChild.focus()
      return
    }
    this.dialogues.newEdge.display = false
    const node1 = Number(this.dialogues.newEdge.node1 + '') - 1
    const node2 = Number(this.dialogues.newEdge.node2 + '') - 1
    const succ = this.addEdge(node1, node2, this.dialogues.newEdge.physical)
    if (succ) {
      this.save_and_update()
    }
  }

  toolbar_delete_node() {
    if(!!this.graphStyle.clicked) {
      mermaid_utils.deleteNode(this.graph, this.graphStyle.clicked)
      this.setClickedNode(null)
      this.save_and_update()
    }
  }

  toolbar_clear_node_edges() {
    if(!!this.graphStyle.clicked) {
      mermaid_utils.deleteNodeEdges(this.graph, this.graphStyle.clicked)
      this.setClickedNode(null);
      this.save_and_update()
    }
  }

  toolbar_clear_graph() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to clear the current graph?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clearGraph()
        this.save_and_update()
      },
      reject: () => {}
    });
  }

  toolbar_flip_graph_style() {
    this.graphStyle.LR = !this.graphStyle.LR
    this.update()
  }

  toolbar_toggle_labels(){
    this.graphStyle.labels = !this.graphStyle.labels
    this.update()
  }

  toolbar_flag_confusing(){
    this.setClickedNode(null);
    this.graph.confusing = !this.graph.confusing
    this.save_and_update()
  }

  toolbar_show_story(){
    this.storyVisible = !this.storyVisible
    this.update()
  }

  keyboardMem = {inp: '', time: Date.now()};
  @HostListener('document:keydown', ['$event']) keydown(event: KeyboardEvent) {
    // EXIT IF DIALOGUE OPEN OR TYPING IN A SELECTED ELEMENT
    if (!!this.keyboardCaptureElement
                  || !!this.dialogues.newNode.display
                  || !!this.dialogues.newEdge.display
                  || !!this.dialogues.rename.display
                  || !!this.dialogues.username.display
                  || !!this.dialogues.help.display) {
        return
    }
    const key = event.key.toLowerCase()
    const ctrl = event.getModifierState('Control')

    if (ctrl){
      if (key == 'z') {
        this.undo()
      }
      if (key == 'y') {
        this.redo()
      }
    }

    const keyCode = key.charCodeAt(0)
    if (key == '?') { // HELP MENU
      this.dialogues.help.display = true
    } else if (key == '[' || key == ']') { // previous/next story
      const dx = key == '[' ? -1 : 1
      const curIndex = this.allStories.findIndex(v => v.key == this.selectedStory?.key)
      let newIndex = curIndex + dx
      newIndex = newIndex % this.allStories.length
      newIndex = newIndex >= 0 ? newIndex : newIndex+this.allStories.length
      const story = this.allStories[newIndex]
      if (story !== undefined) {
        this.store.dispatch(mainActions.setSelectedStory({ selectedStory: story }))
      }
    }

    // EXIT IF NO STORY SELECTED
    if (!this.selectedStory) {
      return
    }

    if (key == 'q'){ //TOGGLE CONFUSING STORY
      this.graph.confusing = !this.graph.confusing
    }

    if (this.graph.confusing) { //DISABLE HOTKEYS IF CONFUSING STORY
      return
    }

    if (key == 'n') { // NEW NODE
      this.toolbar_new_node()

    } else if (key == 'e') { // NEW EDGE
      this.toolbar_new_edge()

    } else if (key == 'r') { // RENAME
      if (!!this.graphStyle.clicked) {
        this.toolbar_rename()
      }
    } else if (key == 'l') { // LABELS
      this.toolbar_toggle_labels()

    } else if (key == 's') {
      this.toolbar_show_story()

    } else if (key == 'a') { // LABELS
      if (!!this.graphStyle.clicked) {
        this.graph.node_names[Number(this.graphStyle.clicked)].abstract = !this.graph.node_names[Number(this.graphStyle.clicked)].abstract
        this.save_and_update()
      }

    } else if (key == 'h') { // LABELS
      if (!!this.graphStyle.clicked) {
        this.graph.node_names[Number(this.graphStyle.clicked)].hypothetical = !this.graph.node_names[Number(this.graphStyle.clicked)].hypothetical
        this.save_and_update()
      }

    } else if (keyCode >= '0'.charCodeAt(0) && keyCode <= '9'.charCodeAt(0)) { // 0-9 select char
      if (Date.now() - this.keyboardMem.time > 500) {
        this.keyboardMem.inp = ''
      }
      this.keyboardMem.inp += key
      this.keyboardMem.time = Date.now()
      const node = Number(this.keyboardMem.inp) - 1
      const nodeSingle = Number(key) - 1
      if (Number.isInteger(node) && node >= 0 && node < this.graph.node_names.length) {
        this.setClickedNode(node + '')
        this.update()
      } else {
        this.keyboardMem.inp = ''
        if (Number.isInteger(nodeSingle) && nodeSingle >= 0 && nodeSingle < this.graph.node_names.length) {
          this.setClickedNode(nodeSingle + '')
          this.update()
        }
      }
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onEscapeKey(event: KeyboardEvent) {
    this.setClickedNode(null)
    this.update()
  }

  onFocusKeyboardElement(event?) {
    if(event){
        this.keyboardCaptureElement = event.target;
    } else {
        this.keyboardCaptureElement = null; 
    }
  }

  toggleSidenav() {
    this.store.dispatch(mainActions.setSideNavVisible({ status: !this.sidenavVisible}))
  }

  async setSelectedStory(story) {
    this.store.dispatch(mainActions.PushLoader())
    let backendSave: Promise<any> = Promise.resolve()
    if (!!this.selectedStory) {
      backendSave = this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave)
      this.selectedStory = null
      this.clearGraph()
      this.update()
    }
    if (!story) {
      this.store.dispatch(mainActions.PopLoader())
      return
    }

    this.mainService.telemetryAdd(this.user.name, 'get ' + story.key).subscribe((resp) => {})
    let res = await this.mainService.userAnnotationGet(this.user.id, story.key, 'annotation').toPromise();
    await backendSave

    this.selectedStory = story

    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {storyId: story.key}, 
        queryParamsHandling: 'merge',
      })

    // PARSE RESPONSE
    if(!!res['resp']){
      const json = JSON.parse(res['resp']);

      this.graph.node_names = []
      this.graph.edges = []
      this.graph.comments = ''
      this.graph.confusing = false

      // FIX OLD GRAPH VERSION
      if(json.node_names[0]?.hasOwnProperty('physical')){
        for (const i in json.node_names){ 
          const node_names = {
            name: json.node_names[i].name,
            abstract: !json.node_names[i].physical,
            hypothetical: json.node_names[i].hypothetical,
          }
          
          this.graph.node_names.push(node_names)
        }
      }

      // FIX OLD GRAPH VERSION
      if(!json.node_names[0]?.hasOwnProperty('name')){       
        for (const i in json.node_names){ 
          const node_names = {
            name: json.node_names[i],
            abstract: false,
            hypothetical: false,
          }
          
          this.graph.node_names.push(node_names)
        }
      }else{
        this.graph.node_names = !!json.node_names ? json.node_names : [{
          name: '',
          abstract: false,
          hypothetical: false,
        }];
      }

      // FIX OLD GRAPH VERSION
      if(!!json.edges && !json.edges[0]?.hasOwnProperty('edge')){     
        
        for (const i in json.edges){
          const edges = {
            edge: json.edges[i],
            physical: true,
          }
          
          this.graph.edges.push(edges)
        }
      }else{
        this.graph.edges = !!json.edges ? json.edges : [];
      }

      this.graph.comments = !!json.comments ? json.comments : [];
      this.graph.confusing = !!json.confusing ? json.confusing : false;
    }else{
      this.graph.node_names = []
      this.graph.edges = []
      this.graph.comments = ''
      this.graph.confusing = false
    }

    this.graphSinceLastSave = JSON.parse(JSON.stringify(this.graph)) // duplicate graph
    this.update()
    this.clear_history()
    this.store.dispatch(mainActions.PopLoader())
  }

  private setClickedNode(nodeClicked) {
    this.graphStyle.clicked = nodeClicked
  }

  private setClickedEdge(edgeClicked){
    this.graphStyle.edgeClicked = edgeClicked
  }

  private addEdge(node1, node2, physical) {
    node1 = Number(node1)
    node2 = Number(node2)

    const validInputs =    Number.isInteger(node1) && node1 >= 0 && node1 < this.graph.node_names.length
                        && Number.isInteger(node2) && node2 >= 0 && node2 < this.graph.node_names.length
    if (!validInputs) {
      this.messageService.add({severity:'error', summary:'Edge Error', detail:'Error adding edge.'})
      return false
    }

    const edge = {
      edge: [node1, node2],
      physical: physical,
    }

    // check new edge is a duplicate
    let edgeDup = '';
    for (let i in this.graph.edges){
      if (this.graph.edges[i].edge[0] == node1 && this.graph.edges[i].edge[1] == node2) edgeDup = i;
    }
    if (!!edgeDup) {
      //this.messageService.add({severity:'error', summary:'Edge Error', detail:'Duplicate edge not allowed.'})
      mermaid_utils.editEdge(this.graph, edgeDup);
      return true
    }

    // check new edge will cause cycle
    const willCycle = mermaid_utils.willBeCyclic(this.graph, node1, node2)
    if (willCycle) {
      this.messageService.add({severity:'error', summary:'Edge Cycle Error', detail:'Error adding edge. Cycle detected.'})
      return false
    }

    mermaid_utils.addEdge(this.graph, edge)
    return true
  }

  private clearGraph() {
    this.graph.node_names = []
    this.graph.edges = []
    this.graph.comments = ''
    this.graph.confusing = false
    this.setClickedNode(null)
  }

  private async save_current_story_backend(storyKey, graph, graphSinceLastSave) {
    if (mermaid_utils.isEqual(graph, graphSinceLastSave)) {
      console.log('skipping save, is dup')
      return
    }
    console.log('saving...')
    graph = JSON.stringify(graph)
    let res = await this.mainService.userAnnotationAdd(this.user.id, storyKey, 'annotation', graph).toPromise();
    this.mainService.telemetryAdd(this.user.name, 'edit ' + storyKey).subscribe((resp) => {})
    return res
  }

  private save_and_update() {
    this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave).then((resp) => {
      this.graphHistory.redo = []
      this.graphHistory.undo.push(this.graphSinceLastSave)
      this.graphSinceLastSave = JSON.parse(JSON.stringify(this.graph)) // duplicate graph
      this.update();
    })
  }

  private clear_history() {
    this.graphHistory.undo = []
    this.graphHistory.redo = []
  }

  undo() {
    if (this.graphHistory.undo.length < 1){
      this.messageService.add({severity:'warn', summary:'Not Available', detail:'There is nothing left on the clipboard to undo.'})
      return
    }

    this.graphHistory.redo.push(this.graph)
    this.graph = this.graphHistory.undo.pop()

    this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave).then((resp) => {
      this.graphSinceLastSave = JSON.parse(JSON.stringify(this.graph)) // duplicate graph
      this.update();
    })
  }

  redo() {
    if (this.graphHistory.redo.length < 1){
      this.messageService.add({severity:'warn', summary:'Not Available', detail:'There is nothing left on the clipboard to redo.'})
      return
    }

    this.graphHistory.undo.push(this.graph)
    this.graph = this.graphHistory.redo.pop()
    
    this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave).then((resp) => {
      this.graphSinceLastSave = JSON.parse(JSON.stringify(this.graph)) // duplicate graph
      this.update();
    })
  }

  private nodeCallback(nodeClicked) {
    if (this.graphStyle.clicked == nodeClicked) {  // same node clicked twice
      // this.toolbar_rename()
      this.setClickedNode(null)
      this.update()
      return
    }

    if (!this.graphStyle.clicked) {  // set node as clicked
      this.setClickedNode(nodeClicked)
      this.update()
    } else { // two nodes clicked, add edge
      this.addEdge(this.graphStyle.clicked, nodeClicked, true)
      this.setClickedNode(null)
      this.save_and_update()
    }
  }

  update() {
    const element: any = this.mermaidDiv.nativeElement
    const graph_str = mermaid_utils.obj_to_graph_str(this.graph, this.graphStyle)
    mermaid_utils.render(element, graph_str, this.nodeCallback.bind(this))
  }



  public async ngOnDestroy() {
    await this.saveBeforeUnload()
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  @HostListener('window:beforeunload')
  @HostListener('window:unload', [ '$event' ])
  async saveBeforeUnload() {
    localStorage.setItem('test', 1 + Number(localStorage.getItem('test')) + '')
    if (!!this.selectedStory) {
      const backendSave = this.save_current_story_backend(this.selectedStory.key, this.graph, this.graphSinceLastSave)
      this.selectedStory = null
      await backendSave
    }
  }

}
