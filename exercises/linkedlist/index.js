// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let currentNode = this.head;

        if (!currentNode) {
            return null;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head || !this.head.next) {
            this.head = null;
            return;
        }

        let veryLastNode = this.head;
        let nodeBeforeLast;

        while (veryLastNode.next) {
            nodeBeforeLast = veryLastNode;
            veryLastNode = veryLastNode.next;
        }

        if (nodeBeforeLast) {
            nodeBeforeLast.next = null;
        }
    }

    insertLast(data) {
        const lastNode = this.getLast();

        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.insertFirst(data);
        }
    }

    getAt(idx) {
        let counter = 0;
        let currentNode = this.head;

        while (currentNode) {
            if (counter === idx) {
                return currentNode;
            }

            currentNode = currentNode.next;
            counter++;
        }

        return null;
    }

    removeAt(idx) {
        if (!this.head) {
            return;
        }

        if (idx === 0) {
            this.head = this.head.next;
            return;
        }

        const previousNode = this.getAt(idx - 1);

        // if (previousNode && previousNode.next) {
        //     previousNode.next = previousNode.next.next;
        // }

        if (!previousNode || !previousNode.next) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    insertAt(data, idx) {
        if (!this.head) {
            this.insertFirst(data);
            return;
        }

        if (idx === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // const previousNode = this.getAt(idx - 1);

        // if (previousNode && previousNode.next) {
        //     previousNode.next = new Node(data, previousNode.next);
        //     return;
        // } else {
        //     this.insertLast(data);
        // }

        const previousNode = this.getAt(idx - 1) || this.getLast();

        previousNode.next = new Node(data, previousNode.next);
    }

    forEach() {}
}

module.exports = { Node, LinkedList };
