import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import {ConfirmationService, MessageService} from 'primeng/api';


import { MainService } from '../main-component/main.services';
import { mermaid_utils } from '../main-component/mermaid_utils'
import { mainActions, selectAllStories, selectMainState, selectSelectedStory, selectSideNavStatus } from '../ngrx/main.reducer';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements AfterViewInit  {
  @ViewChild('mermaid', { static: true }) mermaidDiv: ElementRef;
  @ViewChildren('storyRow', { read: ElementRef }) rowElement: QueryList<ElementRef>;

  selectedStory = null;
  selectedStoryIndex = -1;
  sidenavVisible = null;
  keyboardCaptureElement = null; // prevent KB shortcuts if selected element


  allStories = null

  allGraphs: {data: any[], keys: string[]} = {data: [], keys: []}
  tabViewIndex = 0;

  graph = {
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

    this.store.select(selectSideNavStatus).subscribe(status => {
      this.sidenavVisible = status
      this.cdr.detectChanges()
    })

    this.store.select(selectAllStories).subscribe(v => this.allStories = v)

    this.store.select(selectSelectedStory).subscribe(v => {
      this.setSelectedStory(v)
    })

    this.store.select(selectMainState).subscribe(state => {
      switch (state.action) {
        case mainActions.setKeyboardFocudEle.type:
          console.log('kb focus', state.payload);
          this.onFocusKeyboardElement(state.payload)
          break;
      
        default:
          break;
      }
    })

    this.fetchStories()
  }

  async fetchStories() {
    this.store.dispatch(mainActions.PushLoader())
    let res = await this.mainService.storyGetAll().toPromise();
    let arr = res['resp'];
    const result = []
    Object.entries(arr).forEach(entry => {
      let key = entry[0]
      let story = entry[1]
      result.push({
        text: story,
        key: key
      })
    })
    this.store.dispatch(mainActions.setAllStories({allStories: result}))

    this.route.queryParams.pipe(
        first()
      ).subscribe((params) => {
        if (!!params.storyId) {
          const id = params.storyId
          const match = this.allStories.filter(s => s.key == id)
          if (match.length > 0) this.store.dispatch(mainActions.setSelectedStory({ selectedStory: match[0] }))
        }
      })

    this.store.dispatch(mainActions.PopLoader())
  }

  toolbar_flip_graph_style() {
    this.graphStyle.LR = !this.graphStyle.LR
    this.update()
  }

  @HostListener('document:keydown', ['$event']) keydown(event: KeyboardEvent) {
    // EXIT IF DIALOGUE OPEN OR TYPING IN A SELECTED ELEMENT
    if (!!this.keyboardCaptureElement) {
        return
    }
    const key = event.key.toLowerCase()

    // EXIT IF NO STORY SELECTED
    if (!this.selectedStory) {
      return
    }

    if (key == '[' || key == ']') { // previous/next story
      const dx = key == '[' ? -1 : 1
      const newIndex = this.selectedStoryIndex + dx
      const story = this.allStories[newIndex]
      if (story !== undefined) {
        this.store.dispatch(mainActions.setSelectedStory({ selectedStory: story }))
      }

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

    if (!story) {
      this.store.dispatch(mainActions.PopLoader())
      return
    }

    let res: any = await this.mainService.userAnnotationGetAllUsers(story.key).toPromise()
    console.log(res['data']);
    
    this.allGraphs = res
    this.allGraphs.data = this.allGraphs.data.map(v => JSON.parse(v))
    const indicesToRemove = this.allGraphs.data.map((v, i) => v.node_names.length == 0 ? i : -1)

    this.allGraphs.keys = this.allGraphs.keys.filter((v, i) => !indicesToRemove.includes(i))
    this.allGraphs.data = this.allGraphs.data.filter((v, i) => !indicesToRemove.includes(i))
    console.log(this.allGraphs);

    this.selectedStory = story
    this.selectedStoryIndex = this.allStories.findIndex(v => v.key == story.key)

    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: {storyId: story.key}, 
        queryParamsHandling: 'merge',
      })

    if (this.tabViewIndex >= this.allGraphs.keys.length) {
      this.tabViewIndex = 0
    }

    this.updateTabView()
    this.store.dispatch(mainActions.PopLoader())
  }

  private updateTabView() {
    this.graph = !!this.allGraphs.data[this.tabViewIndex] ? this.allGraphs.data[this.tabViewIndex] : {};
    this.graph.node_names = !!this.graph.node_names ? this.graph.node_names : []
    this.graph.edges = !!this.graph.edges ? this.graph.edges : []
    this.graph.comments = !!this.graph.comments ? this.graph.comments : ''
    this.update()
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
