import mermaid from 'mermaid';

export class mermaid_utils {

  static init() {
    const config = {
      startOnLoad: true,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'cardinal',
      },
      securityLevel: 'loose',
      // theme: 'forest',
    };
    mermaid.initialize(config);
  }

    
  static addNode(graph, name) {
    graph.node_names.push(name)
    return graph.node_names.length - 1
  }

  static addEdge(graph, i, j) {
    graph.edges.push([i, j])
  }


  static obj_to_graph_str(graph, graphStyle?) {
    let result = 'graph LR \n'
    graph.node_names.forEach((name, i) => {
      const nodename = i;
      const line = nodename + '([' + name + '])';
      const callbackLine = 'click ' + nodename + ' callBackFn';
      result += line + '\n'
      result += callbackLine + '\n'
    })
    graph.edges.forEach((edge) => {
      const line = edge[0] + ' --> ' + edge[1]
      result += line + '\n'
    })
    if(!!graphStyle) {
      if (!!graphStyle.clicked) {
        result += 'style ' + graphStyle.clicked + ' fill:#f9f,stroke:#333,stroke-width:2px' + '\n'
      }
    }
    return result
  }

  /**
   * Renders the graph on screen given the HTML element and the string representation of the graph
   * callback is called whenever a node is clicked
   */
  static render(element, graph_str, callback?) {
    mermaid.render("graphDiv", graph_str, (svgCode, bindFunctions) => {
      element.innerHTML = svgCode;
      bindFunctions(element);
      }
    );

    if(!callback) {
      callback = (nodeId) => {
        console.log('Hit callBackFn', nodeId);
      }
    }
    ;(window as any).callBackFn = callback;
  }
}