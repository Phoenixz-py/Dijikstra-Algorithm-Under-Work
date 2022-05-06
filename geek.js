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

    addEdge(v, w) {
        this.EdgeList.get(v).push(w);
        this.EdgeList.get(w).push(v);
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
let vertices = [ ['A', 'B', 'C'], ['D', 'E', 'F'] ];

for(let i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]);
}

// createdEdge.addEdge = addEdge()

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');
g.printGraph();

// if(vertices[0][1] === 1){
//     let adj = [[], []];

// }
