/*
* *
* Doubly Linked List items in memory can be everywhere. For example arrays placed continuously.
* Doubly Linked list have head - the first item and all items points to the next item. The last item points to null,
* Comparison with Arrays (O)
* ------------------| Doubly Linked List  |   Arrays   |
* Pop               |      O(1)           |    O(1)    |
* Push              |      O(n)           |    O(1)    |
* Shift             |      O(1)           |    O(n)    |
* Unshift           |      O(1)           |    O(n)    |
* Insert            |      O(n)           |    O(n)    |
* Delete            |      O(n)           |    O(n)    |
* Lookup by index   |      O(n)           |    O(1)    |
* Lookup by value   |      O(n)           |    O(n)    |
* */

/*
* *
* Because most of methods creating a new Node it's necessary to make a separate Node class
* */
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  // creates a new Node
  constructor(value) {
    const newNode = new Node(value);
    this.head = value ? newNode : null;
    this.tail = value ? newNode : null;
    this.length = value ? 1 : 0;
  }

  // creates a new Node. Add Node to the end
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove last item
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  // creates a new Node. Add Node to the beginning
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // removes a Node from the beginning
  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  // get the Node by index
  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    if (index < this.length/2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  // set a Node with given index
  set(index, value) {
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate) {
      nodeToUpdate.value = value;
      return true;
    }
    return false;
  }

  // creates a new Node. Add Node to the place by index
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value)
    }
    if (index === this.length) {
      return this.push(value)
    }
    let newNode = new Node(value);
    let before = this.get(index - 1);
    const after = before.next;
    before.next = newNode;
    newNode.prev = before;
    newNode.next = after;
    after.prev = newNode;
    this.length++;
    return true;
  }
  // remove an item from given index
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    if (index === 0) {
      return this.shift()
    }
    if (index === this.length - 1) {
      return this.pop()
    }
    const temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }

  // reverse the doubly linked list
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      temp.prev = next;
      prev = temp;
      temp = next;
    }
    return this;
  }
}
