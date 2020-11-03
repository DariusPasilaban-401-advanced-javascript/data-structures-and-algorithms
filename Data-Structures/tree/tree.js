'use strict';

class Node{

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let POarr = [];

class BinaryTree{

  constructor(){
    this.root = null;
  }

  preOrder(root) {
    let currentNode = root; // our beginning node
    // process Current First, than the left, than the right
    // processing of the node
    if (currentNode) {
      // console.log(currentNode.value);
      POarr.push(currentNode.value);

    }
    // we nove current node to the left if it exists;
    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.preOrder(currentNode.right);
    }
    return POarr;
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

  constructor(root){
    super(root);
    this.size = 0;
  }

  add(value, root){

    let currentNode = root;

    let newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
    }
    
    //working
    // if(newNode.value > this.root.value){
    //   this.root.right = new Node(value);
    // } else if(newNode.value < this.root.value){
    //   this.root.left = new Node(value);
    // }

    //test
    if(!currentNode.right){
      currentNode.right = newNode;
    } else if(newNode.value > currentNode.right.value){
      currentNode.right
    }

    if (currentNode.left) {
      this.preOrder(currentNode.left);
    }


    newNode.value > this.root.value){
      this.root.right = new Node(value);
    } 
    
    else if(newNode.value < this.root.value){
      this.root.left = new Node(value);
    }

  }

  contains(value){

    if(value)

    return result;
  }


}

module.exports = {BinaryTree, BinarySearchTree};
