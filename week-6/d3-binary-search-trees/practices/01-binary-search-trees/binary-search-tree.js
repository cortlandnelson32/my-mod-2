// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null
  }

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = { val, left: null, right: null };

    if (!currentNode) {
      this.root = newNode;
      return;
    }

    while (true) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }

  }

  search(val) {
    // Your code here
    let currentNode = this.root;

    while (currentNode) {
      if (val === currentNode.val) {
        return true;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    
    if (!currentNode) return;

    // Process the current node (e.g., print its value)
    console.log(currentNode.value);

    // Recursively call preOrderTraversal on the left and right subtree
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);

    console.log(currentNode.value);

    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);

    this.postOrderTraversal(currentNode.right);

    console.log(currentNode.value);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
