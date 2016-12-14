class node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

function printList(node) {
    process.stdout.write('[' + node.data + ']');
    node = node.next;
    while(node) {
        process.stdout.write(' ---> [' + node.data + ']');
        node = node.next;
    }
    console.log('');
}

function appendEnd(curr, node) {
    while(curr && curr.next) {
        curr = node.next;
    }
    curr = node;
}

function reverseList(node) {
    if (!node.next) {
        console.log(node.data);
    } else {
        reverseList(node.next);
        console.log(node.data);
    }
}

const first = new node(1);
const second = new node(2);
const third = new node(3);
const fourth = new node(4);
const fifth = new node(5);
const sixth = new node(6);

first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
// appendEnd(first, sixth);

printList(first);

reverseList(first);
