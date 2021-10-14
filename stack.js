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

class Stack {
  // creates a new Node
  constructor(value) {
    const newNode = new Node(value);
    this.top = value ? newNode : null;
    this.length = value ? 1 : 0;
  }

  // creates a new Node. Add Node to the top
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  // remove last item
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  // check if stack is empty
  isEmpty() {
    return this.length === 0;
  }

  // get stack size
  size() {
    return this.length;
  }
}

let a = new Stack(1);
a.push(2);
a.push(3);
