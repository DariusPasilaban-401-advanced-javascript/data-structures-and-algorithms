'use strict';

class Node{

  constructor(value){
    this.value = value;
    this.descendants = [];
    this.parent = null;
  }
}

class BinaryTree{

  constructor(){
    this.root = null;
  }

  preOrder(root) {
    let currentNode = root; // our beginning node
    // process Current First, than the left, than the right
    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }
    return;
  }
  
  postOrder(root) {
    let currentNode = root; // our beginning node
    // process left first, than the right, than the current
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.postOrder(currentNode.left);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.postOrder(currentNode.right);
    }
    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }
    return;
  }
  inOrder(root) {
    let currentNode = root; // our beginning node
    // process left First than the currentNod, than the right
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.inOrder(currentNode.left);
    }
    // processing of the node
    if (currentNode) {
      console.log(currentNode.value);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.inOrder(currentNode.right);
    }
    return;
  }

}

class BinarySearchTree extends BinaryTree{

  add(value){

    let newNode = new Node(value);

    const newNode = new TreeNode(value);

  if (this.root) {
    const { found, parent } = this.findNodeAndParent(value);
    if (found) { // duplicated: value already exist on the tree
      found.meta.multiplicity = (found.meta.multiplicity || 1) + 1;
    } else if (value < parent.value) {
      parent.left = newNode;
    } else {
      parent.right = newNode;
    }
  } else {
    this.root = newNode;
  }

  this.size += 1;
  return newNode;
  

  }

  contains(value){

    if(value)

    return result;
  }


}

module.exports = {BinaryTree, BinarySearchTree};
