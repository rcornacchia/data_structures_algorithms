// write a program that inverts a binary tree
var invertTree = function(root) {
    const q = [];
    q.push(root);
    while (q.length) {
        const curr = q.shift();
        let left, right;
        if (curr && curr.left) {
            left = curr.left;
            q.push(left);
        }
        if (curr && curr.right) {
            right = curr.right;
            q.push(right);
        }
        
        if (curr && curr.left) curr.right = left;
        if (curr && curr.right) curr.left = right;
    }
    return root;
};


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

const inverse = invertTree(root);

console.log(root);
console.log(inverse);