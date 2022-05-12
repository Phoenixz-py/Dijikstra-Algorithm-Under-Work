import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
import chalk from 'chalk';


//Storing Strings in variables

const inputStartingStarting = 'Enter the source vertex: ';
const inputEndVertex = 'Enter the end vertex: ';
const inputWeight = 'Enter the weight between them: ';

//Stoage array to store all edges

let Edge1 = prompt(inputStartingStarting);
let wOfedge12 = prompt(inputWeight);
let Edge2 = prompt(inputEndVertex);
let wOfedge23 = prompt(inputWeight);
let Edge3 = prompt(inputStartingStarting);
let wOfedge34 = prompt(inputWeight);
let Edge4 = prompt(inputEndVertex);
let wOfedge45 = prompt(inputWeight);
let Edge5 = prompt(inputStartingStarting);
let wOfedge56 = prompt(inputWeight);
let Edge6 = prompt(inputEndVertex);
let wOfedge61 = prompt(inputWeight);



// Graph is nothing but group of objetcs

class Edge{
    constructor(startVertex, endVertex, weight){
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }

}


let edges = [new Edge(Edge1, Edge2, wOfedge12), new Edge(Edge2, Edge3, wOfedge23), new Edge(Edge3, Edge4, wOfedge34), new Edge(Edge4, Edge5, wOfedge45), new Edge(Edge5, Edge6, wOfedge56), new Edge(Edge6, Edge1, wOfedge61)]

const startPoint = Edge1
const endPoint = Edge6
let startOnEdge = edges.filter(e => e.startVertex == Edge1);

let controlEdge = '';

let keyEdgeManipulator = 100;

for(edges of startOnEdge){
    
    if(edges.weight < keyEdgeManipulator){
        
        keyEdgeManipulator = edges.weight
        controlEdge = edges;
    }
}

console.log(controlEdge.weight);
