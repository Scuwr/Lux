import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';


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

  @Output() setLoader = new EventEmitter();


  stories: any = [
    // {
    //   key: 1,
    //   text: 'hello2hello2hello2hello2hello2hello2hello2hello2',
    //   completed: true,
    // },
  ];

  usernameDialogDisplay = true;
  usernameDialogInput = null;

  renameDialogDisplay = false;
  renameDialogInput = null;

  newNodeDialogDisplay = false;
  newNodeDialogInput = null;

  selectedTreeRowIndex = -1;

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

  userName = null;
  // allUserNames: string[] = null;
  
  constructor(
    private cdr: ChangeDetectorRef,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private mainService: MainService,
  ) {
    // this.appService.storyGetAll().subscribe((res) => {
    //   console.log('getall', res);
      
    // })
    // this.userName = 'TEMPUSER';
  }

  async ngAfterViewInit(){
    window['app'] = this
    window['mermaid_utils'] = mermaid_utils
    mermaid_utils.init()
    this.update()

    // this.allUserNames = (await this.appService.usersGet().toPromise())['resp']
  }

  async username_confirm() {
    this.userName = this.usernameDialogInput.toLowerCase();
    this.usernameDialogDisplay = false;
    this.mainService.telemetryAdd(this.userName, 'login').subscribe((resp) => {})
    let res = await this.mainService.storyGetAll().toPromise();
    let arr = res['resp'];
    Object.entries(arr).forEach(entry => {
      let key = entry[0]
      let story = entry[1]
      this.stories.push({
        text: story,
        key: key
      })
    })
  }

  toolbar_new_node() {
    this.newNodeDialogInput = ''
    this.newNodeDialogDisplay = true
  }

  toolbar_rename() {
    if(!!this.graphStyle.clicked) {
      const current_node_name = this.graph.node_names[this.graphStyle.clicked]
      this.renameDialogInput = current_node_name
      this.renameDialogDisplay = true
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

  async toolbar_raneme_confirm() {
    this.renameDialogDisplay = false
    this.renameDialogInput = this.sanitize_input(this.renameDialogInput)
    this.graph.node_names[this.graphStyle.clicked] = this.renameDialogInput
    this.save_and_update()
  }

  toolbar_new_node_confirm() {
    this.newNodeDialogDisplay = false
    this.newNodeDialogInput = this.sanitize_input(this.newNodeDialogInput)
    mermaid_utils.addNode(this.graph, this.newNodeDialogInput)
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

  @HostListener('document:keydown.escape', ['$event']) onEscapeKey(event: KeyboardEvent) {
    this.setClickedNode(null)
    this.update()
  }

  async sidebar_click_story(index) {
    this.setLoader.emit(true)
    if (this.selectedTreeRowIndex >= 0) {
      await this.save_current_story_backend()
    }
    this.clearGraph()
    this.selectedTreeRowIndex = index;
    let storyKey = this.stories[index].key
    let res = await this.mainService.userAnnotationGet(this.userName, storyKey).toPromise();
    this.graph = !!res['resp'] ? JSON.parse(res['resp']) : {};
    this.graph.node_names = !!this.graph.node_names ? this.graph.node_names : []
    this.graph.edges = !!this.graph.edges ? this.graph.edges : []
    this.graph.comments = !!this.graph.comments ? this.graph.comments : ''
    this.update()
    this.setLoader.emit(false)
  }



  setClickedNode(nodeClicked) {
    this.graphStyle.clicked = nodeClicked
  }

  clearGraph() {
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
    let storyKey = this.stories[this.selectedTreeRowIndex].key
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
