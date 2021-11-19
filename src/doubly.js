import Node from "./node.ts";

export default class DoublyLikedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

    node.prev = this.tail;

    this.tail.next = node;

    this.tail = node;
    this.length++;

    return this;
  }
}
