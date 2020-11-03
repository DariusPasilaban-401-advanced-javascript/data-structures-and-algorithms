'use strict';

class Node{

  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let POarr = [];
let IOarr = [];
let postOrderArr = [];

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
      // console.log(currentNode.value);
      postOrderArr.push(currentNode.value);
    }
    return postOrderArr;
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
      // console.log(currentNode.value);
      IOarr.push(currentNode.value);
    }
    // we move current Node to the right if it exists;
    if (currentNode.right) {
      this.inOrder(currentNode.right);
    }
    return IOarr;
  }

}

class BinarySearchTree extends BinaryTree{

  constructor(root){
    super(root);
    // this.root = root;
    this.size = 0;
  }

  add(value){

    // let currentNode = root;

    let newNode = new Node(value);

    if(this.root === null){
      this.root = newNode;
    } 
    //trial
    else{
      this.insertNode(this.root, newNode);
    }
  }
    
    //working
    // if(newNode.value > this.root.value){
    //   this.root.right = new Node(value);
    // } else if(newNode.value < this.root.value){
    //   this.root.left = new Node(value);
    // }

     insertNode(node, newNode){
     if(newNode.value < node.value){

      if(node.left === null){
        node.left = newNode;
      } else{
        this.insertNode(node.left, newNode);
      }

    } else{
      if(node.right === null){
        node.right = newNode;
      } else{
        this.insertNode(node.right, newNode)
      }
    }

  }

  contains(value){

    if(value)

    return result;
  }


}

module.exports = {BinaryTree, BinarySearchTree};
