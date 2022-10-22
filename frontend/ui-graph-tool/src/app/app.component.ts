import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ToolbarModule } from 'primeng/toolbar';


import { mermaid_utils } from './mermaid_utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit  {
  title = 'ui-graph-tool';
  // @ViewChild('mermaid') mermaidDiv: ElementRef;
  @ViewChild('mermaid', { static: true }) mermaidDiv: ElementRef;

  items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Delete',
        icon: 'pi pi-times'
    },
    {
        label: 'Angular Website',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
    },
    {
        label: 'Router',
        icon: 'pi pi-upload',
        routerLink: '/fileupload'
    }
  ];


  graph = {
    node_names: ['Start', 'Is it?', 'End'],
    edges: [[0, 1], [1, 2]],
  }

  ngAfterViewInit(){
    window['app'] = this
    mermaid_utils.init()
    this.update()
  }
  
  addNode(name) {
    this.graph.node_names.push(name)
    return this.graph.node_names.length - 1
  }

  addEdge(i, j) {
    this.graph.edges.push([i, j])
  }

  update() {
    const element: any = this.mermaidDiv.nativeElement;
    const graph_str = mermaid_utils.obj_to_graph_str(this.graph)
    const callback = (nodeClicked) => {
      const i = this.addNode('NEW')
      this.addEdge(0, i)
      this.update()
    }
    mermaid_utils.render(element, graph_str, callback)
  }


}
