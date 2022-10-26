// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    // Your code here
    this.root = root;
  }

  insert(val, currentNode = this.root) {
    let newNode = new TreeNode(val);

    if (!currentNode) {
      currentNode = newNode;
      this.root = currentNode;
      return;
    }

    while (currentNode) {
      if (currentNode.val > newNode.val && !currentNode.left) {
        currentNode.left = newNode;
        currentNode = currentNode.left;
        return;
      } else if (currentNode.val > newNode.val && currentNode.left) {
        currentNode = currentNode.left;
      }

      if (currentNode.val < newNode.val && !currentNode.right) {
        currentNode.right = newNode;
        currentNode = currentNode.right;
        return;
      } else if (currentNode.val < newNode.val && currentNode.right) {
        currentNode = currentNode.right;
      }
    }
  }

  // search(val, currentNode = this.root) {
  //   if (!currentNode) return false;
  //   let curr = currentNode;

  //   while (curr) {
  //     if (curr.val === val) return true;
  //     if (curr.val < val) curr = curr.right;
  //     else curr = curr.left;
  //   }
  //   return false;
  // }

  search(value, current = this.root) {
    // Your code here
    if (current === null) {
      return false;
    }

    if (current.val === value) {
      return true;
    }

    if (value < current.val) {
      return this.search(value, current.left)
    }

    if (value > current.val) {
      return this.search(value, current.right)
    }
  }

  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
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
    if (!this.root) return;

    const queue = [this.root];
    let curr;

    while (queue.length) {
      curr = queue.shift();
      console.log(curr.val);

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    return;
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    if (!this.root) return;

    const stack = [this.root];
    let curr;

    while (stack.length) {
      curr = stack.pop();
      console.log(curr.val);

      if (curr.left) stack.push(curr.left);
      if (curr.right) stack.push(curr.right);
    }
    return;
  }
}

module.exports = { BinarySearchTree, TreeNode };
