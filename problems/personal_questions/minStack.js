class Node {
    constructor(data, next, min) {
        this.data = data;
        this.next = next;
        this.min = min;
    }
}

function minStack() {
    constructor() {
        this.tail = null;
    }

    push(data) {
        const node = new Node(data);
        if (this.tail == null || this.tail.min > data) {
            node.min = data;
        } else {
            node.min = this.tail.min;
        }
        this.node.next = this.tail;
        this.tail = node;
    }

    pop() {
        const poppable = this.tail;
        this.tail = this.tail.next;
    }

    getMin() {
        return this.tail.min;
    }
}

let node = new Node(3, null);

console.log(node);
