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
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }

    while (true) {
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
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
    console.log(currentNode.val);

    // Recursively call preOrderTraversal on the left and right subtree
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);

  }


  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;
    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }


  postOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);

    this.postOrderTraversal(currentNode.right);

    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root]

    // While the queue is not empty
    while (queue.length) {
      let node = queue.shift();
      console.log(node.val);

      if(node.left){
        queue.push(node.left);
      } else if(node.right){
        queue.push(node.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];
    while (stack.length > 0) {
      let node = stack.pop();
      console.log(node.val);

      if (node.right) {
          stack.push(node.right);
      }
      if (node.left) {
          stack.push(node.left);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
