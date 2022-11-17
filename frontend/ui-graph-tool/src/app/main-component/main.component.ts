import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import {ConfirmationService, MessageService} from 'primeng/api';


import { MainService } from './main.services';
import { mermaid_utils } from './mermaid_utils'
import { PopLoader, PushLoader } from '../ngrx/main.reducer';

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit  {
  @ViewChild('mermaid', { static: true }) mermaidDiv: ElementRef;
  @ViewChildren('storyRow', { read: ElementRef }) rowElement: QueryList<ElementRef>;

  @Output() setLoader = new EventEmitter();

  username = null;

  selectedStory = null;
  sidenavVisible = true;
  keyboardCaptureElement = null; // prevent KB shortcuts if selected element

  dialogues = {
    username: {
      display: true,
      input: null
    },
    rename: {
      display: false,
      input: null,
    },
    newNode: {
      display: false,
      input: null,
      connectedNode: null,
    },
    newEdge: {
      display: false,
      node1: null,
      node2: null,
    },
    help: {
      display: false,
    }
  }


  filteredStories = [
    // {
    //   key: 1,
    //   text: 'hello2hello2hello2hello2hello2hello2hello2hello2',
    //   completed: true,
    // },
  ];
  allStories = [];

  graph = {
    // node_names: ['Start', 'Is it', 'End'],
    // edges: [[0, 1], [1, 2]],
    node_names: [],
    edges: [],
    comments: '',
  }

  graphStyle = {
    clicked: null,
    LR: true,
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

  ngAfterViewInit(){
    window['app'] = this
    window['mermaid_utils'] = mermaid_utils
    mermaid_utils.init()
    this.update()

    setTimeout(() => {
      this.check_params_username()
    }, 0);
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
    this.store.dispatch(PushLoader())

    this.username = this.dialogues.username.input.toLowerCase();
    this.dialogues.username.display = false;
    this.mainService.telemetryAdd(this.username, 'login').subscribe((resp) => {})
    let res = await this.mainService.storyGetAll().toPromise();
    let arr = res['resp'];
    Object.entries(arr).forEach(entry => {
      let key = entry[0]
      let story = entry[1]
      this.allStories.push({
        text: story,
        key: key
      })
      this.filteredStories = this.allStories.map(v => v)
    })

    setTimeout(() => {
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {username: this.username}, 
        queryParamsHandling: 'merge'
      })
    }, 0);
    
    this.route.queryParams.pipe(
        first()
      ).subscribe((params) => {
        if (!!params.storyId) {
          const id = params.storyId
          const match = this.allStories.filter(s => s.key == id)
          if (match.length > 0) this.sidebar_click_story(id)
        }
      })

    this.store.dispatch(PopLoader())
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
    this.dialogues.newNode.display = true
  }

  toolbar_new_edge() {
    let conn = null
    if (!!this.graphStyle.clicked) {
      conn = Number(this.graphStyle.clicked)+1
      this.setClickedNode(null)
      this.update()
    }

    this.dialogues.newEdge.node1 = !!conn ? conn : ''
    this.dialogues.newEdge.node2 = ''
    this.dialogues.newEdge.display = true
  }

  toolbar_rename() {
    if (!this.graphStyle.clicked) {
      return
    }
    let conn = Number(this.graphStyle.clicked)+1
    this.setClickedNode(null)
    this.update()

    const current_node_name = this.graph.node_names[conn]
    this.dialogues.rename.input = current_node_name
    this.dialogues.rename.display = true
}

  private sanitize_input(node_name) {
    const reg = '0-9 a-z A-Z \- \/ \& \' . ,'
    const matchReg = new RegExp('^[' + reg + ']+$')
    const replaceReg = new RegExp('[^' + reg + ']', 'g')
    if (!node_name.match(matchReg)) {
      this.messageService.add({severity:'warn', summary:'Name Sanitized', detail:'Name contains invalid characters that were removed'})
      node_name = node_name.replaceAll(replaceReg, '')
    }
    return node_name
  }

  toolbar_raneme_confirm() {
    this.dialogues.rename.display = false
    this.dialogues.rename.input = this.sanitize_input(this.dialogues.rename.input)
    this.graph.node_names[this.graphStyle.clicked] = this.dialogues.rename.input
    this.save_and_update()
  }

  toolbar_new_node_confirm() {
    this.dialogues.newNode.display = false
    this.dialogues.newNode.input = this.sanitize_input(this.dialogues.newNode.input)
    const newNodeId = mermaid_utils.addNode(this.graph, this.dialogues.newNode.input)
    const conn = Number(this.dialogues.newNode.connectedNode + '') - 1
    if (conn >= 0) {
      this.addEdge(conn, newNodeId)
    } else if (newNodeId >= 1) { // connect to last new node unless its the only node in the graph
      this.addEdge(newNodeId-1, newNodeId)
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
    const succ = this.addEdge(node1, node2)
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
      accept: () => {this.clearGraph()},
      reject: () => {}
    });
  }

  toolbar_flip_graph_style() {
    this.graphStyle.LR = !this.graphStyle.LR
    this.update()
  }

  @HostListener('document:keydown', ['$event']) keydown(event: KeyboardEvent) {
    // EXIT IF DIALOGUE OPEN OR TYPING IN A SELECTED ELEMENT
    if (!!this.keyboardCaptureElement
                  || !!this.dialogues.newNode.display
                  || !!this.dialogues.newEdge.display
                  || !!this.dialogues.rename.display
                  || !!this.dialogues.username.display) {
        return
    }
    const key = event.key.toLowerCase()
    if (key == '?') { // HELP MENU
      this.dialogues.help.display = true
    }

    // EXIT IF NO STORY SELECTED
    if (!this.selectedStory) {
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
    } else if (key == '[' || key == ']') { // previous/next story
      const dx = key == '[' ? -1 : 1
      const selectedStoryIndex = this.allStories.findIndex(v => v.key == this.selectedStory.key)
      const newIndex = selectedStoryIndex + dx
      if (newIndex >= 0 && newIndex < this.allStories.length) {
        this.sidebar_click_story(this.allStories[newIndex].key)
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


  async sidebar_click_story(storyKey) {
    this.store.dispatch(PushLoader())
    let backendSave: Promise<any> = Promise.resolve()
    if (!!this.selectedStory) {
      backendSave = this.save_current_story_backend(this.selectedStory.key, this.graph)
      this.selectedStory = null
      this.clearGraph()
    }

    this.mainService.telemetryAdd(this.username, 'get ' + storyKey).subscribe((resp) => {})
    let res = await this.mainService.userAnnotationGet(this.username, storyKey).toPromise();
    await backendSave

    this.selectedStory = this.allStories.filter(v => v.key == storyKey)[0]
    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {storyId: storyKey}, 
        queryParamsHandling: 'merge',
      })

    this.graph = !!res['resp'] ? JSON.parse(res['resp']) : {};
    this.graph.node_names = !!this.graph.node_names ? this.graph.node_names : []
    this.graph.edges = !!this.graph.edges ? this.graph.edges : []
    this.graph.comments = !!this.graph.comments ? this.graph.comments : ''
    this.update()
    this.store.dispatch(PopLoader())
  }

  sidenavSearchInput(searchText: string, enterKey: boolean) {
    if (searchText.length == 0) {
      this.filteredStories = this.allStories.map(v => v)
    } else if (enterKey) {
      searchText = searchText.toLowerCase()
      this.filteredStories = this.allStories.filter((story) => {
        return story.text.toLowerCase().indexOf(searchText) > -1
      })
    }
  }

  paginate(event) {
    console.log(event);
    
  }



  private setClickedNode(nodeClicked) {
    this.graphStyle.clicked = nodeClicked
  }

  private addEdge(node1, node2) {
    node1 = Number(node1)
    node2 = Number(node2)

    const validInputs =    Number.isInteger(node1) && node1 >= 0 && node1 < this.graph.node_names.length
                        && Number.isInteger(node2) && node2 >= 0 && node2 < this.graph.node_names.length
    if (!validInputs) {
      this.messageService.add({severity:'error', summary:'Edge Error', detail:'Error adding edge.'})
      return false
    }

    // check new edge is a duplicate
    const isDup = this.graph.edges.some(pair => Number(pair[0])==node1 && Number(pair[1])==node2)
    if (isDup) {
      this.messageService.add({severity:'error', summary:'Edge Error', detail:'Duplicate edge not allowed.'})
      return false
    }

    // check new edge will cause cycle
    const willCycle = mermaid_utils.willBeCyclic(this.graph, node1, node2)
    if (willCycle) {
      this.messageService.add({severity:'error', summary:'Edge Cycle Error', detail:'Error adding edge. Cycle detected.'})
      return false
    }
    mermaid_utils.addEdge(this.graph, node1, node2)
    return true
  }

  private clearGraph() {
    this.graph.node_names = []
    this.graph.edges = []
    this.graph.comments = ''
    this.setClickedNode(null)
    this.update()
  }

  private async save_current_story_backend(storyKey, graph) {
    graph = JSON.stringify(graph)
    let res = await this.mainService.userAnnotationAdd(this.username, storyKey, graph).toPromise();
    this.mainService.telemetryAdd(this.username, 'edit ' + storyKey).subscribe((resp) => {})
    return res
  }

  private save_and_update() {
    this.save_current_story_backend(this.selectedStory.key, this.graph).then((resp) => {
      this.update();
    })
  }

  private callback(nodeClicked) {
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
      this.addEdge(this.graphStyle.clicked, nodeClicked)
      this.setClickedNode(null)
      this.save_and_update()
    }
  }

  update() {
    const element: any = this.mermaidDiv.nativeElement
    const graph_str = mermaid_utils.obj_to_graph_str(this.graph, this.graphStyle)
    // console.log(graph_str)
    mermaid_utils.render(element, graph_str, this.callback.bind(this))
  }


}
