class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // Add at end
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift(); // Remove from front
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0]; // Front element
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printQueue() {
    console.log(this.items.join(" <- "));
  }
}

// Usage:
const queue = new Queue();
queue.enqueue("Task1");
queue.enqueue("Task2");
queue.enqueue("Task3");
queue.printQueue(); // Task1 <- Task2 <- Task3

console.log("Dequeued:", queue.dequeue()); // Task1
console.log("Peek:", queue.peek());        // Task2


class SupportTicket {
  constructor(id, user) {
    this.id = id;
    this.user = user;
  }
}

const supportQueue = new Queue();
supportQueue.enqueue(new SupportTicket(101, "Alice"));
supportQueue.enqueue(new SupportTicket(102, "Bob"));
supportQueue.enqueue(new SupportTicket(103, "Charlie"));

// Support agent picks first ticket
console.log("Serving:", supportQueue.dequeue());
