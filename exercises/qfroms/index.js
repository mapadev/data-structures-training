// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
    constructor() {
        this.stackIn = new Stack();
        this.stackOut = new Stack();
    }

    add(record) {
        this.stackIn.push(record);
    }

    remove() {
        this.refill(this.stackIn, this.stackOut);

        const result = this.stackOut.pop();

        this.refill(this.stackOut, this.stackIn);

        return result;
    }

    refill(src, target) {
        while (src.peek()) {
            target.push(src.pop());
        }
    }

    peek() {
        this.refill(this.stackIn, this.stackOut);

        const result = this.stackOut.peek();

        this.refill(this.stackOut, this.stackIn);

        return result;
    }
}

module.exports = Queue;
