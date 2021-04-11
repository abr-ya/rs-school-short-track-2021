const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = this.tail.next;
    }
    this.length += 1;
  }

  dequeue() {
    const val = this.head ? this.head.value : null;
    if (this.length) {
      this.length -= 1;
    }
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = this.head;
    }
    return val;
  }
}

module.exports = Queue;
