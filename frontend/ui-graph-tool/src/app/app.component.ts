import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import {MessageService} from 'primeng/api';


import { mermaid_utils } from './mermaid_utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements AfterViewInit  {
  title = 'ui-graph-tool';
  // @ViewChild('mermaid') mermaidDiv: ElementRef;
  @ViewChild('mermaid', { static: true }) mermaidDiv: ElementRef;

  displayRenameDialog = false;
  renameDialogInput = null;

  graph = {
    node_names: ['Start', 'Is it?', 'End'],
    edges: [[0, 1], [1, 2]],
  }

  graphStyle = {
    clicked: null
  }

  constructor(
    private messageService: MessageService,
  ) {}

  ngAfterViewInit(){
    window['app'] = this
    mermaid_utils.init()
    this.update()
  }

  toolbar_rename(event) {
    if(!!this.graphStyle.clicked) {
      const current_node_name = this.graph.node_names[this.graphStyle.clicked]
      this.renameDialogInput = current_node_name;
      this.displayRenameDialog = true;
    }
  }
  toolbar_raneme_confirm() {
    this.displayRenameDialog = false;
    if (!this.renameDialogInput.match(/^[0-9a-z ]+$/)) {
      this.messageService.add({severity:'error', summary:'Name Error', detail:'Name contains invalid characters'});
      return
    }
    this.graph.node_names[this.graphStyle.clicked] = this.renameDialogInput;
    this.update();
  }

  callback(nodeClicked) {
    const i = mermaid_utils.addNode(this.graph, 'NEW')
    mermaid_utils.addEdge(this.graph, 0, i)
    this.graphStyle.clicked = nodeClicked
    this.update()
  }

  update() {
    const element: any = this.mermaidDiv.nativeElement;
    const graph_str = mermaid_utils.obj_to_graph_str(this.graph, this.graphStyle)
    console.log(graph_str);
    mermaid_utils.render(element, graph_str, this.callback.bind(this))
  }


}
