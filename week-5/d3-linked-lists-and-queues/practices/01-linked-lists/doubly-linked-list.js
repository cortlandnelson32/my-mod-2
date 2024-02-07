class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);

    // If the list is empty, set the new node as both head and tail
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        // If the list is not empty, add the new node to the head
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    // Modify length
    this.length++;
}

  addToTail(val) {
    // Your code here
    const newNode = new DoublyLinkedListNode(val);

    if (!this.head){
      this.head = newNode;
      
    } else {
      let currentNode = this.head;

      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode
    }
    this.tail = newNode
    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
