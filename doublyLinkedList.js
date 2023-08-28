class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Append a node to the end of the list
    append(data) {
        let newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Print the list
    printList() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" <-> "));
    }
}

// Example usage:
let list = new DoublyLinkedList();
list.append(10);
list.append(20);
list.append(30);

list.printList();  // This will print: 10 <-> 20 <-> 30





}