// NODES

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const firstNode = new Node('Night Drive by Jimmy Eat World');

console.log(firstNode.data);
console.log(firstNode.next);

module.exports = Node;


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  setNextNode(node) {
    this.next = node;
  }
}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node('Gauze by Gleemer');
firstNode.setNextNode(secondNode);

console.log(firstNode);

module.exports = Node;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Error!');
    }
  }
}

const firstNode = new Node('I am an instance of a Node!');
firstNode.setNextNode('hahaha');

module.exports = Node;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode(node) {
    return this.next;
  }
}

const firstNode = new Node('I am an instance of a Node!');
const secondNode = new Node('I am the next Node!');
firstNode.setNextNode(secondNode);
console.log(secondNode.getNextNode());

module.exports = Node;



class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Node('Berry Tasty');
const vanillaNode = new Node('Vanilla');
const coconutNode = new Node('Coconuts for Coconut');

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;

while (currentNode != null) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}

module.exports = Node;

// LINKED LISTS
// linking nodes together using their next property creates a singly linked list
// tail node is the end of a linked list, head node is the first node.

// common operations:
// adding, removing, finding, traversing (or traveling through) the linked list

const Node = require('./Node');

class LinkedList {
  
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while(tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
}

module.exports = LinkedList;


const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

}

module.exports = LinkedList;

const LinkedList = require('./LinkedList');

const seasons = new LinkedList();

seasons.addToHead('summer');
seasons.addToHead('spring');
seasons.addToTail('fall');
seasons.addToTail('winter');
seasons.removeHead();

seasons.printList();

// DOUBLY LINKED LISTS
// contain links to the nodes prior to current node as well
// common operations include adding to both ends, removing from both ends, finding and removing from anywhere in the list, traversing through the list

const Node = require('./Node');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    if (currentHead) {
      currentHead.setPreviousNode(newHead);
      newHead.setNextNode(currentHead);
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
  }
  
  addToTail(data) {
    const newTail = new Node(data);
    const currentTail = this.tail;
    if (currentTail) {
      currentTail.setNextNode(newTail);
      newTail.setPreviousNode(currentTail);
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
  }
  
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    if (this.head) {
      this.head.setPreviousNode(null);
    }
    if (removedHead === this.tail) {
      this.removeTail();
    }
    return removedHead.data;
  }
  
  removeTail() {
    const removedTail = this.tail;
    if (!removedTail) {
      return;
    }
    this.tail = removedTail.getPreviousNode();
    if (this.tail) {
      this.tail.setNextNode(null);
    }
    if (removedTail === this.head) {
      this.removeHead();
    }
    return removedTail.data;
  }
  
  removeByData(data) {
    let nodeToRemove;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodeToRemove = currentNode;
        break;
      }
      currentNode = currentNode.getNextNode();
    }
    if (!nodeToRemove) {
      return null;
    }
    if (nodeToRemove === this.head) {
      this.removeHead();
    } else if(nodeToRemove === this.tail) {
      this.removeTail();
    } else {
      const nextNode = nodeToRemove.getNextNode();
      const previousNode = nodeToRemove.getPreviousNode();
      nextNode.setPreviousNode(previousNode);
      previousNode.setNextNode(nextNode);
    }
    return nodeToRemove;
  }
  
  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }
}

module.exports = DoublyLinkedList;

// using the doubly linked list:
const DoublyLinkedList = require('./DoublyLinkedList.js');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');

subway.removeHead();
subway.removeTail();

subway.removeByData('TimesSquare');

subway.printList();

// QUEUES
// a queue is a linear collection of nodes that exclusively adds (enqueues) nodes to the tail, and removes (dequeues) nodes from the head of the queue. the last method is peek which reveals data from the front of the queue without removing it. first in first out FIFO

// if a queue has a limit on data that can be placed inside of it, it is called a bounded queue. if you attempt to add to a full queue, this is called queue overflow. if you attempt to dequeue from an empty queue, this is called queue underflow.

// SIMPLE QUEUE EXAMPLE w/ ENQUEUE METHOD

const LinkedList = require('./LinkedList');

class Queue {
  constructor() {
    this.queue = new LinkedList();
    this.size = 0;
  }

  enqueue(data) {
    this.queue.addToTail(data);
    this.size++;
    if (this.queue !== null) {
      console.log(`Added ${data}! Queue size is now ${this.size}.`);
    }
  }

  dequeue() {
    const data = this.queue.removeHead();
    this.size--;
    if (data) {
      console.log(`Removed ${data}! Queue size is ${this.size}.`);
    }
  }
}

module.exports = Queue;

const restaurantOrder = new Queue();
console.log(`restaurantOrder queue has ${restaurantOrder.size} orders.\n`);
restaurantOrder.enqueue('apple pie');
restaurantOrder.enqueue('roast chicken');
restaurantOrder.enqueue('quinoa salad');


// EXAMPLE OF BOUNDED QUEUE 

const LinkedList = require('./LinkedList');

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
      console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    } else {
      throw new Error(`Queue is full!`);
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      console.log(`Removed ${data} from queue! Queue size is now ${this.size}.`);
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;

const boundedQueue = new Queue(3);

boundedQueue.enqueue(1);
boundedQueue.enqueue(2);
boundedQueue.enqueue(3);

boundedQueue.dequeue();
boundedQueue.dequeue();
boundedQueue.dequeue();
boundedQueue.dequeue();

// STACKS DATA STRUCTURE
// linear collection of nodes that adds (pushes) data to to head (top) of the stack. stacks remove (pop) from the head of the stack only. peek returns data from the top of the stack without removing it. LIFO - last in, first out.

// SIMPLE STACK EXAMPLE

const LinkedList = require('./LinkedList');

class Stack {
  constructor(maxSize = Infinity) {
    this.stack = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    if(this.hasRoom()) {
      this.stack.addToHead(value);
      this.size++;
    } else {
      throw new Error(`Stack is full`);
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const value = this.stack.removeHead();
      this.size--;
      return value;
    }
    else {
      console.log('Stack is empty!');
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack.head.data;
    } else {
      return null;
    }
  }

}

module.exports = Stack;

// pushing and popping practice

const Stack = require('./Stack');

// 1. Define an empty pizza stack with a maxSize of 6
const pizzaStack = new Stack(6);
// 2. Add pizzas as they are ready until we fill up the stack
for (let i = 1; i < 7; i++) {
  pizzaStack.push(`Pizza #${i}`);
}
// 3. Try pushing another pizza to check for overflow
try {
  pizzaStack.push(`Pizza #7`);
} catch(e) {
  console.log(e);
}

// 4. Peek at the pizza on the top of stack and log its value
console.log(`The first pizza to deliver is ${pizzaStack.peek()}`);

// 5. Deliver all the pizzas from the top of the stack down
for (let i = 0; i < 6; i++) {
  pizzaStack.pop();
}

// 6. Try popping another pizza to check for empty stack
try {
  pizzaStack.pop();
} catch(e) {
  console.log(e);
}



