// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
              4
           /     \
          2       6
        /   \   /   \
       1     3 5     7
*/

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    const newNode = new TreeNode(val);
    // if there is no root
    if (!this.root) {

      this.root = newNode;
      return this;
    } 
    // if the val is less than the currentNode val
    if (val < currentNode.val) {
      // check if there is a node to the left
      // if there is not we have found the insertion point
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.left)
      }
    }
    // if the val is greater than the currentNode val
    if (val > currentNode.val) {
      // check if there is a node to the right
      // if there is not we have found the insertion point
      if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
        return this.insert(val, currentNode.right);
      }
    }

  }

  search(val) {
    // Your code here
    // if there is a root
    // set a curr variable
    // use our > < operators to move through the tree
  }

  


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
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
