import Node from "./node.ts";

interface Head<T> {
  value: T;
  next: Node<T> | null;
}

export default class DoublyLikedList<T> {
  public head: Head<T>;

  public tail: Head<T> | Node<T>;

  public length: number;

  constructor(value: T) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;

    this.length = 1;
  }

  append(value: T) {
    const node = new Node(value);

    node.prev = this.tail;

    this.tail.next = node;

    this.tail = node;
    this.length++;

    return this;
  }
}
