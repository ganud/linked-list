import Node from './node.js';

class LinkedList {
  constructor() {
    this.listhead = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.listhead == null) this.listhead = newNode; // Assign listhead if nothing in the list
    else {
      // Traverse until last element, set next node as the value entered.
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
    const newNode = new Node(value);
    if (this.listhead == null) this.listhead = newNode;
    else {
      newNode.nextNode = this.listhead;
      this.listhead = newNode;
    }
  }

  head() {
    if (!this.listhead) return null;
    return this.listhead.value;
  }

  tail() {
    let tmp = this.listhead;
    while (tmp.nextNode != null) tmp = tmp.nextNode;
    return tmp.value;
  }

  at(index) {
    let tmp = this.listhead;
    for (let i = 0; i < index; i++) tmp = tmp.nextNode;
    return tmp.value;
  }

  pop() {
    let tmp = this.listhead;
    if (!this.listhead) return null;
    // Traverse until the second-last element
    for (let i = 0; i < this.size() - 2; i++) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = null;
  }

  contains(value) {
    let tmp = this.listhead;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      if (tmp.value === value) { return true; }
    }
    return false;
  }

  find(value) {
    let tmp = this.listhead;
    let count = 0;
    while (tmp.nextNode != null) {
      if (tmp.value === value) { return count; }
      tmp = tmp.nextNode;
      count++;
    }
    // Iterate over the last element too
    if (tmp.value === value) { return count; }
    return false;
  }

  toString() {
    let tmp = this.listhead;
    let string = `( ${tmp.value} )`;
    while (tmp.nextNode != null) {
      tmp = tmp.nextNode;
      string = `${string} -> ( ${tmp.value} )`;
    }
    string = `${string} -> null`;
    return string;
  }
}
export default LinkedList;
