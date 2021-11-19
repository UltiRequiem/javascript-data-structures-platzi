import Node from "./node.js";

export class MySinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }
}
