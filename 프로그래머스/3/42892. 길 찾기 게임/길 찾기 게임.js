class Node {
    constructor(value, x, y) {
        this.value = value;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    
    inseart(newNode) {
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._inseart(this.root, newNode);
        }
    }
    
    _inseart(parent, newNode) {
        if (newNode.x < parent.x) {
            if (parent.left === null) {
                parent.left = newNode;
            } else {
                this._inseart(parent.left, newNode);
            }
        } else {
            if (parent.right === null) {
                parent.right = newNode;
            } else {
                this._inseart(parent.right, newNode);
            }
        }
    }
    
    preorder(root, result) {
        if (root !== null) {
            result.push(root.value);
            this.preorder(root.left, result);
            this.preorder(root.right, result);
        }
    }
    
    postorder(root, result) {
        if (root !== null) {
            this.postorder(root.left, result);
            this.postorder(root.right, result);
            result.push(root.value);
        }
    }
}

function solution(nodeinfo) {
    const nodes = nodeinfo.map((info, index) => [...info, index + 1]);
    nodes.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        }
        
        return b[1] - a[1];
    })
    
    const tree = new BinaryTree();
    nodes.forEach((info) => {
        tree.inseart(new Node(info[2], info[0], info[1]));
    })
    
    const preorderResult = [];
    const postorderResult = [];

    tree.preorder(tree.root, preorderResult);
    tree.postorder(tree.root, postorderResult);

    return [preorderResult, postorderResult];
}