import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import {ConfirmationService, MessageService} from 'primeng/api';


import { MainService } from '../main-component/main.services';
import { mermaid_utils } from '../main-component/mermaid_utils'
import { mainActions, selectAllStories, selectMainState, selectSelectedStory, selectSideNavStatus } from '../ngrx/main.reducer';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements AfterViewInit  {
  @ViewChild('mermaidmain', { static: true }) mermaidDiv: ElementRef;
  @ViewChildren('storyRow', { read: ElementRef }) rowElement: QueryList<ElementRef>;

  private readonly ngDestroyed$ = new Subject();

  user = {
    key: null,
    id: null,
    name: null
  }

  dialogues = {
    username: {
      display: true,
      input: null
    },
    help: {
      display: false,
    }
  }

  selectedStory = null;
  sidenavVisible = true;
  keyboardCaptureElement = null; // prevent KB shortcuts if selected element


  allStories = null

  allGraphs: {data: any[], keys: string[]} = {data: [], keys: []}
  tabViewIndex = 0;

  graph = {
    // node_names: ['Start', 'Is it', 'End'],
    // edges: [[0, 1], [1, 2]],
    //node_names: [],
    node_names: [{
      name: '',
      physical: true,
      hypothetical: false,
    }],
    edges: [{
      edge: [],
      physical: true,
    }],
    comments: '',
    confusing: false,
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
    // this.userName = 'TEMPUSER';
  }

  public ngOnDestroy() {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  ngAfterViewInit(){
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

    this.store.select(selectSelectedStory)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(v => {
        if (!v || v.key == this.selectedStory?.key) {
          return
        }
        this.setSelectedStory(v)
    })

    this.store.select(selectMainState)
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe(state => {
      switch (state.action) {
        case mainActions.setKeyboardFocudEle.type:
          this.onFocusKeyboardElement(state.payload)
          break;
      
        default:
          break;
      }
    })

    // this.store.select(selectAllStories).subscribe(v => this.allStories = v)
    this.fetchStories().then(() => {
      this.checkParamsUsername()
    })
  }

  onEditModeButton() {
    this.router.navigate(['/home'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve'
    })
  }

  async fetchStories() {
    if (!!this.allStories && this.allStories.length > 0) {
      return
    }
    this.store.dispatch(mainActions.PushLoader())
    let res = await this.mainService.storyGetAll().toPromise();
    let arr = res['resp'];
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

    this.store.dispatch(mainActions.setAllStories({allStories: result}))
    this.store.dispatch(mainActions.PopLoader())
  }

  checkParamsUsername() {
    this.route.queryParams.pipe(
      first()
    ).subscribe((params) => {
      if (!!params.storyId && params.storyId != this.selectedStory?.key) {
        const id = params.storyId
        const match = this.allStories?.filter(s => s.key == id)
        if (match?.length > 0) this.store.dispatch(mainActions.setSelectedStory({ selectedStory: match[0] }))
      }
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
    if (!userkey){
      this.messageService.add({severity:'error', summary:'Error', detail:'Username invalid.'})
      return
    }

    this.user.key = userkey
    this.user.id = userkey.split(':')[2]
    this.user.name = this.dialogues.username.input
    this.dialogues.username.display = false;

    // set username in url
    setTimeout(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {username: this.user.name}, 
        queryParamsHandling: 'merge'
      })
    }, 0);
  }

  toolbar_flip_graph_style() {
    this.graphStyle.LR = !this.graphStyle.LR
    this.update()
  }

  toolbar_toggle_labels(){
    this.graphStyle.labels = !this.graphStyle.labels
    this.update()
  }

  @HostListener('document:keydown', ['$event']) keydown(event: KeyboardEvent) {
    // EXIT IF DIALOGUE OPEN OR TYPING IN A SELECTED ELEMENT
    if (!!this.keyboardCaptureElement
       || !!this.dialogues.username.display) {
        return
    }

    const key = event.key.toLowerCase()
    if (key == '[' || key == ']') { // previous/next story
      const dx = key == '[' ? -1 : 1
      const curIndex = this.allStories.findIndex(v => v.key == this.selectedStory?.key)
      let newIndex = curIndex + dx
      newIndex = newIndex % this.allStories.length
      newIndex = newIndex >= 0 ? newIndex : newIndex+this.allStories.length
      const story = this.allStories[newIndex]
      if (story !== undefined) {
        this.store.dispatch(mainActions.setSelectedStory({ selectedStory: story }))
      }

    } else if (key == 'l') { // LABELS
      this.toolbar_toggle_labels()
    }
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

    let res: any = await this.mainService.userAnnotationGetAllUsers(story.key).toPromise()
    
    this.allGraphs = res
    let keys = res.keys
    let data = res.data.map(v => JSON.parse(v))

    const indicesToRemove = data.map((v, i) => mermaid_utils.isEmpty(v) ? i : -1) // remove empty stories
    const suffixLen = (':' + story.key).length // remove suffix :#id

    keys = keys.filter((v, i) => !indicesToRemove.includes(i))
    data = data.filter((v, i) => !indicesToRemove.includes(i))

    // sort in pairs
    const pair = keys.map((_, i) => ({key: keys[i], data: data[i]}))
    pair.sort((a, b) => (a.key < b.key) ? -1 : ((a.key == b.key) ? 0 : 1))

    // final result
    this.allGraphs.keys = pair.map((_, i) => pair[i].key)
    this.allGraphs.data = pair.map((_, i) => pair[i].data)

    this.selectedStory = story
    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {storyId: story.key}, 
        queryParamsHandling: 'merge',
      })

    const curUserKey = this.allGraphs.keys.findIndex((v) => this.user.id == v)
    this.tabViewIndex = curUserKey >= 0 ? curUserKey : 0
    this.updateTabView(this.tabViewIndex)
    this.store.dispatch(mainActions.PopLoader())
  }

  private updateTabView(newIndex?) {
    console.log("tabViewUpdate")
    if (newIndex !== undefined) {
      const some_other_index_to_fix_bug = newIndex !== 0 ? 0 : 1
      this.tabViewIndex = some_other_index_to_fix_bug
      this.cdr.detectChanges()
      this.tabViewIndex = newIndex
      this.cdr.detectChanges()
    }

    if(!!this.allGraphs.data[this.tabViewIndex]){
      this.graph.node_names = []
      this.graph.edges = []
      this.graph.comments = ''
      this.graph.confusing = false

      let json = this.allGraphs.data[this.tabViewIndex];

      if(!json.node_names[0]?.hasOwnProperty('name')){
        for (let i in json.node_names){ 
          const node_names = {
            name: json.node_names[i],
            physical: true,
            hypothetical: false,
          }
          
          this.graph.node_names.push(node_names)
        }
      }else{
        this.graph.node_names = !!json.node_names ? json.node_names : [];
      }

      // FIX OLD GRAPH VERSION
      if(!json.edges[0]?.hasOwnProperty('edge')){        
        for (let i in json.edges){
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
      this.graph.node_names = [];
      this.graph.edges = [];
      this.graph.comments = '';
      this.graph.confusing = false;
    }

    setTimeout(() => {
      this.update()
    }, 0);
  }


  private callback(nodeClicked) {

  }

  update() {
    const element: any = this.mermaidDiv.nativeElement
    const graph_str = mermaid_utils.obj_to_graph_str(this.graph, this.graphStyle)
    // console.log(graph_str)
    mermaid_utils.render(element, graph_str, this.callback.bind(this))
  }


}
