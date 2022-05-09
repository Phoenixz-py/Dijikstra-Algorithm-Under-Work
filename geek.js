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
//{weight:x, vertex:y} 

    addEdge(v, ae, w) {
        this.EdgeList.get({vertexi: v, weight: ae}).push(w);
        this.EdgeList.get({vertexi: w, weight: ae}).push(v);
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
let vertices = ['A' , 'B', 'C', 'D', 'E', 'F'];

for(let i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}



g.addEdge('A', 3, 'B');
g.addEdge('A', 5, 'D');
g.addEdge('A', 6, 'E');
g.addEdge('B', 7, 'C');
g.addEdge('D', 4, 'E');
g.addEdge('E', 1, 'F');
g.addEdge('E', 2, 'C');
g.addEdge('C', 6, 'F');
g.printGraph();

