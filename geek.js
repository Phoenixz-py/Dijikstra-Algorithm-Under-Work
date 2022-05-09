import promptSync from 'prompt-sync';
const store = promptSync({sigint: true}); 
import chalk from 'chalk';

//Storing Strings in variables

const inputStringE = 'Enter edge distance ';
const inputStringV = 'Enter vertex name ';

//Stoage array to store all edges

let StoreE = [];
let StoreV = [];

// Graph is nothing but group of objetcs

class Graph{
    constructor(vertex){
        this.vertex = vertex;
        this.EdgeList = new Map();
    }
    addVertex(v) {
        this.EdgeList.set(v, []);
    }

    addEdge(v, w, ae) {
        this.EdgeList.get(v).push(w).push(ae);
        this.EdgeList.get(w).push(v).push(ae);
    }
    printGraph()
{
    let get_keys = this.EdgeList.keys();

    for(var i of get_keys){
        
        // great the corresponding adjacency list
        // for the vertex
        let get_values = this.EdgeList.get(i);
        let conc = '';

    // iterate over the adjacency list
        // concatenate the values into a string

        for(var m of get_values){
            conc += m + ' ';
        //printing the vertezxt 
        console.log(i + ' ->' + conc);  
        }
}
}
}

let g = new Graph(6)
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

for(let i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}



g.addEdge('A', 'B', 5);
g.addEdge('A', 'D', 1);
g.addEdge('A', 'E', 4);
g.addEdge('B', 'C', 3);
g.addEdge('D', 'E', 2);
g.addEdge('E', 'F', 3);
g.addEdge('E', 'C', 4);
g.addEdge('C', 'F', 2);
g.printGraph();

