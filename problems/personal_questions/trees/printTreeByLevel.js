// print tree by level
// first leaves, then each row, finally root
class node {
    constructor(data, left, right, parent) {
        this.data = data || null;
        this.left = left || null;
        this.right = right || null;
        this.parent = parent || null;
    }
}

function insertNode(treeNode, node) {
    if (node.data < treeNode.data) {
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

const one = new node(1);
const two = new node(2);
const three = new node(3);
const four = new node(4);
const five = new node(5);
const root = three;

insertNode(root, one);
insertNode(root, two);
insertNode(root, four);
insertNode(root, five);

console.log(three);


//        D
//   B        F
// A   C    E   G

// D
// B F
// A, C, E, G


const levels = [];
levels.push([root.data]);
let nextLevel = []
addChildren(root, nextLevel);
levels.push(nextLevel.map(node => node.data));

while (nextLevel.length) {
    const currentLevel = nextLevel;
    nextLevel = [];
    console.log(currentLevel);
    currentLevel.map(node => addChildren(node, nextLevel));
    if (nextLevel.length) levels.push(nextLevel.map(node => node.data));
}

levels.map(level => console.log(level));

function addChildren(node, nextLevel) {
    console.log(node.data);
    if (node.right) nextLevel.push(node.right);
    if (node.left) nextLevel.push(node.left);
}
