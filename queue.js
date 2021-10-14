/*
* *
* Because most of methods creating a new Node it's necessary to make a separate Node class
* */
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue {
  // creates a new Node
  constructor(value) {
    const newNode = new Node(value);
    this.first = value ? newNode : null;
    this.last = value ? newNode : null;
    this.length = value ? 1 : 0;
  }

  // creates a new Node. Add Node to the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // remove item
  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.first.next = null;
    }
    this.length--;
    return temp;
  }
}
