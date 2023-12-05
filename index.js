import LinkedList from './linkedlist.js';

const linkedlist = new LinkedList();
linkedlist.append('zero');
linkedlist.append('first');

linkedlist.append('last');

console.log(linkedlist.insertAt("fort", 2));
console.log(linkedlist.toString())

