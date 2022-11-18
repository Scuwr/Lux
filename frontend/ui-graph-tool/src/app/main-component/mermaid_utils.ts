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

  static isEmpty(graph) {
    const hasData = graph.node_names.length > 0 || graph.comments.length > 0
    return !hasData
  }
  
  static addNode(graph, name) {
    graph.node_names.push(name)
    return graph.node_names.length - 1
  }

  static addEdge(graph, i, j) {
    graph.edges.push([i, j])
  }

  private static sortEdges(graph) {
    const N = graph.node_names.length
    graph.edges.sort((a, b) => (a[0]-b[0])*N+(a[1]-b[1]))
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
    const regexstr = brokenWords.map(w => '[^a-zA-Z](' + w + ')[^a-zA-Z]').join('|')
    const regex = new RegExp(regexstr, 'g')
    if(name.match(regex)) {
      name = name.replaceAll(regex, (w) => {return w.substring(0, w.length-1) + '_' + w.substring(w.length-1)})
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
    if (graphStyle?.LR == false) {
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
      const callbackLine = 'click ' + nodename + ' callBackFnForMermaidJS';
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
        console.log('Hit graph callback function that was left empty', nodeId);
      }
    }
    ;(window as any).callBackFnForMermaidJS = callback;
  }

  static willBeCyclic(graph, node1, node2) {
    const adj: [number, number][] = [...graph.edges, [node1, node2]]
    const V = graph.node_names.length
  /**
   * Returns true if the graph contains a
   * cycle, else false.
   * This function is a variation of DFS() in
   * https://www.geeksforgeeks.org/archives/18212
   */

    // This function is a variation of DFSUtil() in
    // https://www.geeksforgeeks.org/archives/18212
    const isCyclicUtil = (i, visited, visitedDirty) => {
      if (visitedDirty[i])
          return true;

      if (visited[i])
          return false;

      // Mark the current node as visited and part of recursion stack
      visited[i] = true;
      visitedDirty[i] = true;

      let children = adj.filter((pair) => pair[0] == i).map((pair) => pair[1]);
      
      for (let c=0;c< children.length;c++)
          if (isCyclicUtil(children[c], visited, visitedDirty))
              return true;

      visitedDirty[i] = false;

      return false;
    }

    // Mark all the vertices as not visited and not dirty
    let visited = Array(V).fill(false);
    let visitedDirty = Array(V).fill(false);

    // Call the recursive helper function to detect cycle in different DFS trees
    for (let i = 0; i < V; i++)
      if (isCyclicUtil(i, visited, visitedDirty))
        return true;

    return false;
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