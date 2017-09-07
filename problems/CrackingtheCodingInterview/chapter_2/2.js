function findKthToLast(head, k) {
  let kPointer = head;
  let lastPointer = head;

  let counter = 0;
  while (counter < k) {
    lastPointer = lastPointer.next;
    counter += 1;
  }

  while (lastPointer) {
    kPointer = kPointer.next;
    lastPointer = lastPointer.next;
  }

  console.log(kPointer);
  return kPointer;
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

const one   = new Node(1);
const two   = new Node(2);
const three = new Node(3);
const four  = new Node(4);

one.next   = two;
two.next   = three;
three.next = four;

findKthToLast(one, 2);