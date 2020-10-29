'use strict'

class Node{

  constructor(value){
    this.value = value;
    this.next = null;

  }

}

//something that manages values using nodes
class Stack{

  constructor(){

    this.top = null;

  }

  //adding value to stack
  push(value){
    
    const item = new Node(value);

    item.next = this.top;
    this.top = item;

  }

  //passing value to something else
  pop(){

    if(this.isEmpty()){
      return 'stack is empty';
    } else{
      let temp = this.top;

    this.top = temp.next;
    temp.next = null;
    return temp.value;
    }
    // let temp = this.top;

    // this.top = temp.next;
    // temp.next = null;
    // return temp.value;

  }

  peek(){
    if(!this.isEmpty()){
      return this.top.value
    } else{
      return 'stack is empty';
    }
  }

  isEmpty(){
    if(this.top === null){
      return true;
    } else{
      false;
    }
  }


}

class Queue{

  constructor(){
    this.front = null;
    this.rear = null;
  }


  enqueue(value){

    const newNode = new Node(value);

    if(this.rear){
      this.rear.next = new Node;
    }
    this.rear = newNode;

    if(!this.front){
      this.front = this.rear;
    }
  }

  dequeue(){

    if(this.isEmpty()){
      return 'stack is empty';
    } else{
      const temp = this.front;

      this.front = this.front.next;
      // temp.next = null; 
  
      // if(this.isEmpty()){
      //   this.rear = null;
      // }
  
      return temp.value;
    }
  }

  peek(){
    if(!this.isEmpty()){
      return this.front.value;
    }
  }

  isEmpty(){
    if(this.front === null){
      return true;
    } else{
      return false;
    }
  }

}

// module.exports = Stack;
module.exports = {Stack, Queue,};
// module.exports = Stack + Queue;


