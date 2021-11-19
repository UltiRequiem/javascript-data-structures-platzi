import Node from "./node.js";

export class DoublyLikedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;

    this.tail.next = newNode;

    this.tail = newNode;
    this.length++;

    return this;
  }
}
