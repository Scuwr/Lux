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

  static obj_to_graph_str(params) {
    let result = 'graph LR \n'
    params.node_names.forEach((name, i) => {
      const nodename = 'A' + i;
      const line = nodename + '([' + name + '])';
      const callbackLine = 'click ' + nodename + ' callBackFn';
      result += line + '\n'
      result += callbackLine + '\n'
    })
    params.edges.forEach((edge) => {
      const line = 'A' + edge[0] + ' --> ' + 'A' + edge[1]
      result += line + '\n'
    })
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