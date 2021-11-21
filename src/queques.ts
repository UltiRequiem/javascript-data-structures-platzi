import Node from "./node.ts";

export default class Queue<T> {
  public first: null | Node<T>;
  public last: null | Node<T>;
  public length: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value: T) {
    const node = new Node(value);

    if (this.length === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last!.next = node;
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

console.log(queue.peek());

console.log(queue);
