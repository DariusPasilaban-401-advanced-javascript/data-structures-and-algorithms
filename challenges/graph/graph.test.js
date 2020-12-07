
let importGraph = require('./graph.js');
let Graph = importGraph.Graph;
const graph = new Graph();


describe('testing graph', () => {
  test('test 1', () => {


const A = graph.addVertex('A');
const B = graph.addVertex('B');
const C = graph.addVertex('C');
const D = graph.addVertex('D');
const E = graph.addVertex('E');

graph.addEdge(A, B);
graph.addEdge(A, D);
graph.addEdge(A, C);
graph.addEdge(B, E);
graph.addEdge(B, D);
graph.addEdge(D, C);

// console.log(graph.breadthFirst(A));  // => [A, B, D, C, E]
// // console.log(graph.depthFirst(A));
// console.log(graph.recursiveDepthFirst(A)); // => [A, B, E, D, C]

expect(graph.getNeighbors()).toEqual('A');

  })
})