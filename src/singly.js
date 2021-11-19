import Node from "./node.ts";

export class MySinglyLinkedList {
  constructor(...value) {
    this.head = new Node(...value);

    this.tail = this.head;

    this.length = 1;
  }

  append(value) {
    const node = new Node(value);

    this.tail.next = node;
    this.tail = node;

    this.length++;

    return this;
  }
}

const list = new MySinglyLinkedList(34, "hey");

list.append(2);

console.log(list);
