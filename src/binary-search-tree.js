const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    if (!this.nodeRoot) {
      this.nodeRoot = new Node(data);
    } else {
      this.#addNode(data, this.nodeRoot);
    }
  }

  #addNode (data, parentNode) {
    if (data < parentNode.data) {

      if (!parentNode.left) {
        parentNode.left = new Node(data);
      } else {
        this.#addNode(data, parentNode.left)
      }
    } else {

      if (!parentNode.right) {
        parentNode.right = new Node(data);
      } else {
        this.#addNode(data, parentNode.right);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.#findNode(data, this.nodeRoot);
  }

  #findNode(data, parentNode) {
    if (data === parentNode.data) {
      return parentNode;
      
    } else {

      if (data < parentNode.data) {
        return parentNode.left ? this.#findNode(data, parentNode.left) : null;
      } else {
        return parentNode.right ? this.#findNode(data, parentNode.right) : null;
      }
    }
  }

  remove(data) {
    this.nodeRoot = this.#removeNode(data, this.nodeRoot);
  }

  #removeNode(data, parentNode) {
    if (parentNode === null) {
      return null;
    }

    if (data < parentNode.data) {
      parentNode.left = this.#removeNode(data, parentNode.left);
      return parentNode;
    }

    if (data > parentNode.data) {
      parentNode.right = this.#removeNode(data, parentNode.right);
      return parentNode;
    }

    if (parentNode.left === null && parentNode.right === null) {
      return null;
    }

    if (parentNode.left === null) {
      parentNode = parentNode.right;
      return parentNode;
    }

    if (parentNode.right === null) {
      parentNode = parentNode.left;
      return parentNode;
    }

    let minRightNode = this.#findMinNode(parentNode.right);
    parentNode.data = minRightNode.data;
    parentNode.right = this.#removeNode(minRightNode.data, parentNode.right);
    return parentNode;
  }   

  min() {
    return this.nodeRoot ? this.#findMinNode(this.nodeRoot).data : null;
  }

  #findMinNode(parentNode) {
    return parentNode.left ? this.#findMinNode(parentNode.left) : parentNode;
  }

  max() {
    return this.nodeRoot ? this.#findMaxNode(this.nodeRoot).data : null;
  }

  #findMaxNode(parentNode) {
    return parentNode.right ? this.#findMaxNode(parentNode.right) : parentNode;
  }

}

module.exports = {
  BinarySearchTree
};