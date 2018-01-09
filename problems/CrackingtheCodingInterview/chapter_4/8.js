// 4.8 First Common Ancestor

function findAncestor(root, node1, node2) {
  if (root === node1 && root === node2) return root;
  
  let ancestor = root;
  let pred = {};
  let curr = root;
  let node1Found = false;
  let node2Found = false;
  let remainingNodes = [curr]

  while (remainingNodes.length) {
    curr = remainingNodes.pop();
    if (curr === node1) node1Found = true;
    if (curr === node2) node2Found = true;
    console.log(curr);
    console.log(node1);
    const left = curr.left;
    const right = curr.right;
    if (left) remainingNodes.push(left);
    if (right) remainingNodes.push(right);
  }

  console.log(node1Found);
  console.log(node2Found);
}

class Node {
  constructor(id, left, right) {
    this.id = id;
    this.left = left;
    this.right = right;
  }
}

const f = new Node('f', null, null);
const e = new Node('e', f, null);
const d = new Node('d', null, null);
const c = new Node('c', null, null);
const b = new Node('b', d, e);
const a = new Node('a', b, c);

console.log(findAncestor(a, a, b));