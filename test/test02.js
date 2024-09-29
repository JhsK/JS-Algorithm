class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = root;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this._insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
        this._insertNode(root.right, newNode);
      }
    }
  }
}

function bfs_queue(root) {
  const queue = [];

  if (root === null) return;

  queue.push(root);

  while (queue.length) {
    const currentNode = queue.shift();
    console.log(currentNode);
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }

    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
}

function bfs_self(root) {
  if (root === null) return;

  while (true) {
    console.log(root);
    if (root.left !== null) {
      bfs_self(root);
    }

    if (root.right !== null) {
      bfs_self(root);
    }
  }
}
