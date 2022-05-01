const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.firstNode;
    this.lastNode;
  }

  getUnderlyingList() {
    return this.firstNode;
  }

  enqueue(value) {
    if (!this.firstNode) {
      this.firstNode = new ListNode(value);
      this.lastNode = this.firstNode;
    } else {
      this.lastNode.next = new ListNode(value);
      this.lastNode = this.lastNode.next;
    }  
  }

  dequeue() {
    let node;
    if (this.firstNode) {
      node = this.firstNode;
      this.firstNode = this.firstNode.next;
    }
    return node ? node.value : node;
  }
}

module.exports = {
  Queue
};
