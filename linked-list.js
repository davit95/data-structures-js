/*
* *
* Linked List items in memory can be everywhere. For example arrays placed continuously.
* Linked list have head - the first item and all items points to the next item. The last item points to null,
* Comparison with Arrays (O)
* ------------------| Linked List  |   Arrays   |
* Pop               |      O(1)     |    O(1)    |
* Push              |      O(n)     |    O(1)    |
* Shift             |      O(1)     |    O(n)    |
* Unshift           |      O(1)     |    O(n)    |
* Insert            |      O(n)     |    O(n)    |
* Delete            |      O(n)     |    O(n)    |
* Lookup by index   |      O(n)     |    O(1)    |
* Lookup by value   |      O(n)     |    O(n)    |
* */

/*
* *
* Because most of methods creating a new Node it's necessary to make a separate Node class
* */
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  // creates a new Node
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  // creates a new Node. Add Node to the end
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // remove last item
  pop() {
    if(!this.head) return undefined
    let temp = this.head
    let pre = this.head
    while(temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  // creates a new Node. Add Node to the beginning
  unshift(value) {
    const newNode = new Node(value)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // removes a Node from the beginning
  shift() {
    if(!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    temp.next = null
    return temp
  }

  // get the Node by index
  get(index) {
    if(index < 0 || index >= this.length) return undefined
    let temp = this.head
    for(let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  // set a Node with given index
  set(index, value) {
    let nodeToUpdate = this.get(index)
    if(nodeToUpdate) {
      nodeToUpdate.value = value
      return true
    }
    return false
  }

  // creates a new Node. Add Node to the place by index
  insert(index, value) {
    if(index < 0 || index > this.length) return false
    if(index === this.length) return this.push(value)
    if(index === 0) return this.unshift(value)

    const newNode = new Node(value)
    const temp = this.get(index - 1)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  // remove an item from given index
  remove(index) {
    if(index < 0 || index >= this.length) return undefined
    if(index === 0) return this.shift()
    if(index === this.length - 1) return this.pop()

    const before = this.get(index - 1)
    const temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
  }

  // reverse the linked list
  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for(let i = 0; i < this.length; i++) {
      next = temp.next
      temp.next = prev
      prev = temp
      temp = next
    }
    return this
  }
}
