class node {
    constructor(data, left, right, parent) {
        this.data = data || null;
        this.left = left || null;
        this.right = right || null;
        this.parent = parent || null;
    }
}

function insertNode(treeNode, node) {
    if (node.data > treeNode.data) {
        // go right
        if (!treeNode.right) {
            treeNode.right = node;
        } else {
            insertNode(treeNode.right, node);
        }
    } else {
        if (!treeNode.left) {
            treeNode.left = node;
        } else {
            insertNode(treeNode.left, node);
        }
    }
}

function printTree(treeNode) {
    
}

function BFS(treeNode) {
    if (!!treeNode.left) BFS(treeNode.left);
    console.log(treeNode.data);
    if (!!treeNode.right) BFS(treeNode.right);
}

const one = new node(1);
const two = new node(2);
const three = new node(3);
const four = new node(4);
const five = new node(5);
const root = one;

insertNode(root, two);
insertNode(root, three);
insertNode(root, four);
insertNode(root, five);

BFS(one);

printTree(one);

// create a data structure that represents a binary tree node
// each node must point to its left and right children
//           must hold a string
// insert the first seven letters of the alphabet into this tree
