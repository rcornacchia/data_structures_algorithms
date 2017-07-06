// determine if there is a route between nodes
const routeBetweenNodes = (nodeA, nodeB) => {
  let result;
  const unvisitedNodes = nodeA.neighbors;
  while (unvisitedNodes.length && !result) {
    // console.log(unvisitedNodes);
    const node = unvisitedNodes.pop();
    if (node.name == nodeB.name) {
      result = 'Route exists between these 2 nodes';
    }
    node.neighbors.map(n => {
      if (n.name == nodeB.name) {
        result = 'Route exists between these 2 nodes';
      }
      if (!n.visited) {
        unvisitedNodes.push(n);
      }
    });
    node.visited = true;
  }
  if (result) return result;
  return 'No route between these two nodes';
}

class Graph {
  constructor() {
    this.nodes = [];
  }
}

class Node {
  constructor(name, neighbors) {
    this.name = name;
    this.neighbors = neighbors || [];
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
a.neighbors = [b, c];
b.neighbors = [c, d];

const graph = new Graph();
graph.nodes = [a, b, c, d];

console.log(routeBetweenNodes(a, d));
console.log(routeBetweenNodes(a, e));