class node {
    constructor(data, next) {
        this.data = data;
        this.next = next || undefined;
    }
}

function printList(node) {
    process.stdout.write('[' + node.data + '] --->');
    node = node.next;
    while(node) {
        process.stdout.write(' ---> [' + node.data + ']');
        node = node.next;
    }
    console.log('');
}

const first = new node(1);
const second = new node(2);
const third = new node(3);

first.next = second;
second.next = third;

printList(first);
