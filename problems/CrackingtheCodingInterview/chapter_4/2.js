// Minimal Tree - given a sorted (increasing order) array with unique
// integer elements, write an algorithm to create a binary search tree
// with minimal height

const node = data => ({
  data,
  left: null,
  right: null
});

const insertNode = (root, node) => {
  if (node.data < root.data) {
    (!root.left) ? root.left = node
                 : insertNode(root.left, node);
  } else {
    (!root.right) ? root.right = node
                  : insertNode(root.right, node);
  }
}

const minimalTree = arr => {
  let root = null;
  let n = node(arr.shift());
  console.log(n);
  while (arr.length) {
    n = node(arr.shift());

  }
}

const arr = [1, 3, 4, 5, 7, 8, 9];
minimalTree(arr);