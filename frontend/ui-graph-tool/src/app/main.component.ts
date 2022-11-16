import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';



import {ConfirmationService, MessageService} from 'primeng/api';
import { MainService } from './main.services';


import { mermaid_utils } from './mermaid_utils'

@Component({
  selector: 'main-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterViewInit  {
  @ViewChild('mermaid', { static: true }) mermaidDiv: ElementRef;
  @ViewChildren('storyRow', { read: ElementRef }) rowElement: QueryList<ElementRef>;

  @Output() setLoader = new EventEmitter();

  userName = null;

  selectedStory = null;
  sidenavVisible = true;
  selectedElement = null; // prevent KB shortcuts if selected element

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
    clicked: null
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,

    private messageService: MessageService,
    private confirmationService: ConfirmationService,

    private mainService: MainService,
  ) {
    // this.userName = 'TEMPUSER';
  }

  async ngAfterViewInit(){
    window['app'] = this
    window['mermaid_utils'] = mermaid_utils
    mermaid_utils.init()
    this.update()
  }

  async username_confirm() {
    this.userName = this.dialogues.username.input.toLowerCase();
    this.dialogues.username.display = false;
    this.mainService.telemetryAdd(this.userName, 'login').subscribe((resp) => {})
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
    
    const sub = this.route.queryParams.pipe(
        first()
      ).subscribe((params) => {
        // console.log(params);
        // console.log(params);
        if (!!params.storyId) {
          const id = params.storyId
          const match = this.allStories.filter(s => s.key == id)
          if (match.length > 0) this.sidebar_click_story(id)
        }
        // console.log('SUBSC');
      })
  }

  toolbar_new_node() {
    this.dialogues.newNode.input = ''
    this.dialogues.newNode.connectedNode = ''
    this.dialogues.newNode.display = true
  }

  toolbar_new_edge() {
    this.dialogues.newEdge.node1 = ''
    this.dialogues.newEdge.node2 = ''
    this.dialogues.newEdge.display = true
  }

  toolbar_rename() {
    if(!!this.graphStyle.clicked) {
      const current_node_name = this.graph.node_names[this.graphStyle.clicked]
      this.dialogues.rename.input = current_node_name
      this.dialogues.rename.display = true
    }
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
    if (Number.isInteger(conn) && conn >= 0 && conn < newNodeId) {
      mermaid_utils.addEdge(this.graph, conn, newNodeId)
    } else if (newNodeId >= 1) { // connect to last new node unless its the only node in the graph
      mermaid_utils.addEdge(this.graph, newNodeId-1, newNodeId)
    }
    this.save_and_update()
  }

  toolbar_new_edge_confirm(event, gotonext) {
    if (!!gotonext) {
      event.srcElement.parentElement.nextElementSibling.firstChild.focus()
      return
    }
    this.dialogues.newEdge.display = false
    const node1 = Number(this.dialogues.newEdge.node1 + '') - 1
    const node2 = Number(this.dialogues.newEdge.node2 + '') - 1
    if (Number.isInteger(node1) && node1 >= 0 && node1 < this.graph.node_names.length
        && Number.isInteger(node2) && node2 >= 0 && node2 < this.graph.node_names.length) {
      mermaid_utils.addEdge(this.graph, node1, node2)
    } else {
      this.messageService.add({severity:'error', summary:'Error', detail:'Error in input.'})
    }
    this.save_and_update()
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

  @HostListener('document:keydown', ['$event']) keydown(event: KeyboardEvent) {
    if (!this.selectedStory 
                  || !!this.selectedElement
                  || !!this.dialogues.newNode.display
                  || !!this.dialogues.newEdge.display
                  || !!this.dialogues.rename.display
                  || !!this.dialogues.username.display) {
        return
    }
    const key = event.key.toLowerCase()
    if (key == 'n') {
      this.toolbar_new_node()
    } else if (key == 'e') {
      this.toolbar_new_edge()
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onEscapeKey(event: KeyboardEvent) {
    this.setClickedNode(null)
    this.update()
  }

  onFocus(event?) {
    if(event){
        this.selectedElement = event.target;
    } else {
        this.selectedElement = null; 
    }
  }


  async sidebar_click_story(storyKey) {
    this.setLoader.emit(true)
    if (!!this.selectedStory) {
      await this.save_current_story_backend()
    }
    this.clearGraph()
    this.selectedStory = this.allStories.filter(v => v.key == storyKey)[0]
    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {storyId: storyKey}, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  
    let res = await this.mainService.userAnnotationGet(this.userName, storyKey).toPromise();
    this.graph = !!res['resp'] ? JSON.parse(res['resp']) : {};
    this.graph.node_names = !!this.graph.node_names ? this.graph.node_names : []
    this.graph.edges = !!this.graph.edges ? this.graph.edges : []
    this.graph.comments = !!this.graph.comments ? this.graph.comments : ''
    this.update()
    this.setLoader.emit(false)
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

  private clearGraph() {
    this.graph.node_names = []
    this.graph.edges = []
    this.graph.comments = ''
    this.setClickedNode(null)
    this.update()
  }

  callback(nodeClicked) {
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
      mermaid_utils.addEdge(this.graph, this.graphStyle.clicked, nodeClicked)
      this.setClickedNode(null)
      this.save_and_update()
    }
  }

  async save_current_story_backend() {
    let storyKey = this.selectedStory.key
    let graph = JSON.stringify(this.graph)
    let res = await this.mainService.userAnnotationAdd(this.userName, storyKey, graph).toPromise();
    this.mainService.telemetryAdd(this.userName, 'edit ' + storyKey).subscribe((resp) => {})
    return res
  }

  save_and_update() {
    this.save_current_story_backend().then((resp) => {
      this.update();
    })
  }
  update() {
    const element: any = this.mermaidDiv.nativeElement
    const graph_str = mermaid_utils.obj_to_graph_str(this.graph, this.graphStyle)
    // console.log(graph_str)
    mermaid_utils.render(element, graph_str, this.callback.bind(this))
  }


}
