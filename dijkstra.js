import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});
import chalk from 'chalk';


//Storing Strings in variables

const mainSourceInput = 'Enter the main source vertex: ';
const inputStartingStarting = 'Enter the source vertex: ';
const inputEndVertex = 'Enter the end vertex: ';
const inputWeight = 'Enter the weight between them: ';
const goTo = 'Where do you want to go: ';
const connect = 'Enter the weight connecting the very first input and last vertex input : '

//Stoage array to store all edges

let Edge1 = prompt(chalk.magenta(mainSourceInput));
let wOfedge12 = prompt(chalk.cyan(inputWeight));

let Edge2 = prompt(chalk.magenta(inputEndVertex));
let wOfedge23 = prompt(chalk.cyan(inputWeight));
let Edge3 = prompt(inputStartingStarting);

let wOfedge34 = prompt(chalk.cyan(inputWeight));

let Edge4 = prompt(chalk.magenta(inputEndVertex));
// let wOfedge45 = prompt(chalk.cyan(inputWeight));
let wofedge41 = prompt(chalk.underline(chalk.green(connect)));

// let Edge5 = prompt(inputStartingStarting);
// let wOfedge56 = prompt(chalk.cyan(inputWeight));

// let Edge6 = prompt(chalk.magenta(inputEndVertex));
// let wOfedge61 = prompt(chalk.cyan(inputWeight));

let Destination = prompt(goTo)

// Graph is nothing but group of objetcs

class EDGE{
    constructor(startVertex, endVertex, weight){
        this.startVertex = startVertex;
        this.endVertex = endVertex;
        this.weight = weight;
    }
    // dijkstra(){
    //     let displayer = `The starting vertexes : + ${this.startVertex}\n + ${this.endVertex}\n + ${this.weight}`;
    //     console.table(displayer)
    // }
}


// class TRANSVERSE extends EDGE {

//    myMethod(){
//        return super.dijkstra() + ' Lets see if it works lol ';
//    }

// }


let edges = [new EDGE(Edge1, Edge2, wOfedge12), new EDGE(Edge2, Edge3, wOfedge23), new EDGE(Edge3, Edge4, wOfedge34), new EDGE(Edge4, Edge1, wofedge41)];
// let edges = [new Edge(Edge1, Edge2, wOfedge12), new Edge(Edge2, Edge3, wOfedge23), new Edge(Edge3, Edge4, wOfedge34), new Edge(Edge4, Edge5, wOfedge45), new Edge(Edge5, Edge6, wOfedge56), new Edge(Edge6, Edge1, wOfedge61)];

// const startPoint = Edge1
// // const endPoint = Edge6

let startOnEdge = edges.filter(e => e.startVertex == Edge1);

let controlEdge = '';

let keyEdgeManipulator = 100;

for(edges of startOnEdge){
    
    if(edges.weight < keyEdgeManipulator){
        
        keyEdgeManipulator = edges.weight;
        controlEdge = edges;
    }
}

console.table(edges)
