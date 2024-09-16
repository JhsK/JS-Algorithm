class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.value = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  inseart(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;

      while (true) {
        if (curr.value > key) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.value !== key) {
      if (curr.value > key) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

function solution(lst, searchList) {
  const bst = new BST();
  const result = [];

  for (let x of lst) {
    bst.inseart(x);
  }

  for (let x of searchList) {
    if (bst.search(x)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
