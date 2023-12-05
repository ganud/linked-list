import Node from './node.js';

class LinkedList {
  constructor() {
    this.listhead = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.listhead == null) this.listhead = newNode; // Assign listhead if nothing in the list
    else {
      let tmp = this.listhead;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = newNode;
    }
  }

  size() {
    let tmp = this.listhead;
    let counter = 0;
    while (tmp != null) {
      counter++;
      tmp = tmp.nextNode;
    }
    return counter;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.listhead == null) this.listhead = newNode;
    else {
      newNode.nextNode = this.listhead;
      this.listhead = newNode;
    }
  }

  head() { 
    if (!this.listhead) return null;
    return this.listhead.value;
  };

  tail() {
    let tmp = this.listhead;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp.value;
  }
}
export default LinkedList;
