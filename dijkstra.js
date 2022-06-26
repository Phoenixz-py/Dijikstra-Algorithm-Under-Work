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
const midConnect='Enter the weight to create a diagonal like connection between the first Edge and the third Edge: '

//Stoage array to store all edges

const Edge1 = prompt(chalk.magenta(mainSourceInput));
const wOfedge12 = Number(prompt(chalk.cyan(inputWeight)));

const Edge2 = prompt(chalk.magenta(inputEndVertex));
const wOfedge23 = Number(prompt(chalk.cyan(inputWeight)));

const Edge3 = prompt(chalk.magenta(inputStartingStarting));

const wOfedge34 = Number(prompt(chalk.cyan(inputWeight)));

const Edge4 = prompt(chalk.magenta(inputEndVertex));
// let wOfedge45 = prompt(chalk.cyan(inputWeight));
const wofedge41 = Number(prompt(chalk.underline(chalk.green(connect))));

// let Edge5 = prompt(inputStartingStarting);
// let wOfedge56 = prompt(chalk.cyan(inputWeight));

// let Edge6 = prompt(chalk.magenta(inputEndVertex));
// let wOfedge61 = prompt(chalk.cyan(inputWeight));

const wofedge13 = Number(prompt(chalk.cyan(midConnect)))

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


const edge = [new EDGE(Edge1, Edge2, wOfedge12), new EDGE(Edge2, Edge3, wOfedge23), new EDGE(Edge3, Edge4, wOfedge34), new EDGE(Edge4, Edge1, wofedge41), new EDGE(Edge1, Edge3, wofedge13)];
// let edges = [new Edge(Edge1, Edge2, wOfedge12), new Edge(Edge2, Edge3, wOfedge23), new Edge(Edge3, Edge4, wOfedge34), new Edge(Edge4, Edge5, wOfedge45), new Edge(Edge5, Edge6, wOfedge56), new Edge(Edge6, Edge1, wOfedge61)];

// const startPoint = Edge1
// // const endPoint = Edge6

let startOnEdge = edge.filter(e => e.startVertex == Edge1);


let controlEdge = '';
let keyEdgeManipulator = 100;

for(const edge of startOnEdge){
    
    if(edge.weight < keyEdgeManipulator){
        
        keyEdgeManipulator = edge.weight;
        controlEdge = edge;
    }
}


let calc = () => {
  
          const powerOfEdge1 = 0;

          let powerOfEdge2 = powerOfEdge1 + wOfedge12;

          let  powerOfEdge3 = 999;

          let powerOfEdge4 = 999;

           powerOfEdge4 = powerOfEdge1 + wofedge41;
        
           powerOfEdge3 = powerOfEdge2 + wOfedge23;

          

// TESTING VALUES

console.log(powerOfEdge1) // right

console.log(powerOfEdge2)

console.log(powerOfEdge3)

console.log(powerOfEdge4)

console.table(edge)

    if(powerOfEdge1 + powerOfEdge2 > powerOfEdge3){
        return console.log(Edge1 + ' -> ' + Edge2 + ' -> ' + Destination)

    } 

     else if(powerOfEdge1 + powerOfEdge2 < powerOfEdge3)
     {
        return  console.log(Edge1 + '-> ' + Destination);
     }

     else if(wofedge13 < powerOfEdge1 + powerOfEdge2){

        return console.log(Edge1 + ' ->' + Edge3)
     }
        else{

           return console.log("Just Switch case works")
        }
        



}

calc(edge);

//================================WRT TO C================================================================


// console.table(edge);
