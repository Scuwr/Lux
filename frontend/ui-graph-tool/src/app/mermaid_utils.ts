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

  static deleteNodeEdges(graph, i) {
    graph.edges = graph.edges.filter(edge => edge[0]!=i && edge[1]!=i);
  }

  static deleteNode(graph, i) {
    this.deleteNodeEdges(graph, i)
    graph.node_names.splice(i, 1) // remove i-th node
    // fix edge numbers after removing edge i
    graph.edges.forEach(edge => {
      if(edge[0] >= i) edge[0] -= 1
      if(edge[1] >= i) edge[1] -= 1
    });
  }

  private static sanatizeName(name) {
    const brokenWords = ['interpolate', 'call', 'click']
    const regexstr = brokenWords.map(w => '(' + w + ')').join('|')
    const regex = new RegExp(regexstr, 'g')
    if(name.match(regex)) {
      name = name.replaceAll(regex, (w) => {return w + '_'})
      console.warn('Name sanatized', name);
    }
    return name
  }

  private static addNewLineToName(name) {
    const newLine = '<br/>';
    let lastNewLine = -1;
    for (let i = 0; i < name.length; i++) {
      lastNewLine++;
      if (lastNewLine < 50) {
        continue
      }
      //need new line at first space
      const cur = name.charAt(i)
      if(cur == ' ') {
        name = name.substring(0, i) + newLine + name.substring(i+1)
        i += (newLine.length - 1)
        lastNewLine = 0
      }
    }
    return name;
  }

  static obj_to_graph_str(graph, graphStyle?) {
    let result = 'graph '
    if (!!graphStyle.td) {
      result += 'TD'
    } else {
      result += 'LR'
    }
    result += ' \n'
    graph.node_names.forEach((name, i) => {
      const nodename = i;
      name = this.sanatizeName(name)
      name = (i+1) + ': ' + name
      name = this.addNewLineToName(name)
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

  private static decode_google_sheet_copy(text) {
    let res = []
    let inseideQuote = false
    let currentCellIndex = 0

    for(let i=0; i<text.length; i++){
        let cur = text.charAt(i)
        if(currentCellIndex >= res.length){
            res.push("")
            if(cur == '"') { // check if quoted cell
                inseideQuote = true
                continue
            }
        }
        if (cur != '\n' && cur != '\t' && cur != '"') {
            res[currentCellIndex] += cur
        } else if(cur == '\n' || cur == '\t') {
            if (inseideQuote) { // in quoted cell, new lines and tabs appear as is
                res[currentCellIndex] += cur
            } else { // new line in unquoted cell, ends cell
                inseideQuote = false;
                currentCellIndex += 1;
            }
        } else if (cur == '"') {
            if (inseideQuote) {
                let nextChar = (i+1)>=text.length ? '\n' : text.charAt(i+1)
                if (nextChar == '"') { // double quote inside quoted cell, puts single quote in result
                    res[currentCellIndex] += '"'
                    i++; // skip the double quote
                } else if (nextChar == '\n' || nextChar == '\t') { // single quote in quoted cell, end quoted cell
                    inseideQuote = false;
                    currentCellIndex += 1;
                    i++; // skip newline afterwards
                } else if (nextChar == '\r') { // single quote in quoted cell, end quoted cell
                  inseideQuote = false;
                  currentCellIndex += 1;
                  i += 2; // skip \r and newline afterwards
                } else {
                  console.error('UNEXPECTED STATE PARSING FROM GOOGLE SHEETS AT INDEX', i, currentCellIndex, inseideQuote, cur, nextChar);
                }
            } else { // in unquoted cell, quotations appear as is
                res[currentCellIndex] += cur
            }
        }
    }
    return res;
  }
}