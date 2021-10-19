
/*
* *
* Because most of methods creating a new Node it's necessary to make a separate Node class
* */
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // creates a new Node
  constructor(value) {
    this.root = null;
  }

  // creates a new Node. Add Node to the BST
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode === this.root) {
        return undefined;
      }
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return false;
    }
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Breadth first search
  BFS() {
    let currentNode = this.root;
    let results = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return results;
  }

  // always go left first if it possible, then right
  DFSPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    traverse(this.root);
    return results;
  }

  //from bottom to end
  DFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      traverse(this.root);
      if (currentNode.right) {
        traverse(currentNode.right);
      }
      results.push(currentNode.value);
    }
    return results;
  }
}
