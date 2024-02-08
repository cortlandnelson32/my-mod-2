const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)
  }

  hash(key) {
    // Your code here

    // Compute the SHA-256 hash of the key
    const sha = sha256(key);

    // Take the first 8 characters of the hash
    const first8Chars = sha.slice(0, 8);

    // Convert hexadecimal string to a number
    const hashValue = parseInt(first8Chars, 16);

    return hashValue;
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // Your code here

    const index = this.hashMod(key);

    // const newPair = new KeyValuePair(key, value);

    if(!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw Error(`hash collision or same key/value pair already exists!`)
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    const newNode = new KeyValuePair(key, value);


     // Check if the bucket is empty
    if (!this.data[index]) {
      this.data[index] = newNode;
    } else {
      // If the bucket is not empty, traverse 
      let current = this.data[index];

      // Check if the key already exists in the linked list
      while (current) {
          if (current.key === key) {
            // change the value to the value passed in
              current.value = value;
              return;
          }
          current = current.next;
      }

      // If the key does not exist in the linked list, insert the new node at the head
      newNode.next = this.data[index];
      this.data[index] = newNode;
    }
    this.count ++;
  }

  insert(key, value) {
    // Your code here
    this.insertWithHashCollisions(key, value);

  }

}


const hashTable = new HashTable();
console.log("Hash of 'A':", hashTable.hash("A"));



module.exports = HashTable;
