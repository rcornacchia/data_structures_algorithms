class Node {
    constructor(data, next, min) {
        this.data = data;
        this.next = next;
        this.min = min;
    }
}

class minLinkedListStack {
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
        node.next = this.tail;
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

class minNode {
    constructor(data, min) {
        this.data = data;
        this.min = min;
    }
}

class minStack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        let min;

        if (!this.stack.length) min = data;
        else {
            min = this.stack[this.stack.length-1].min;
            if (data < min) min = data;
        }

        this.stack.push({data, min});
    }

    pop() {
        this.stack.pop();
    }

    getMin() {
        return this.stack[this.stack.length-1].min;
    }
}

// const stack = new minLinkedListStack();
const stack = new minStack();
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(1);
stack.pop();

const min = stack.getMin();


console.log(min);
