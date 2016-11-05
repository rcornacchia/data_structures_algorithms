class node {
    constructor(data, next) {
        this.data = data;
        this.next = next || undefined;
    }
}

const printList(node) {
    console.log('[' + node.value + '] --->');
    while(node) {
        console.log(' ---> [' + node.value + ']');
        node = node.next;
    }
}

const first = new node(1);
const second = new node(2);
const third = new node(3);

first.next = second;
second.next = third;

printList(first);
