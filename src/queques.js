import Node from "./node.js";

export default class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;

    return this;
  }
}

const queue = new Queue();

console.log(queue);

console.log(queue.enqueue(1));

console.log(queue.enqueue("hello"));

console.log(queue.peek())
