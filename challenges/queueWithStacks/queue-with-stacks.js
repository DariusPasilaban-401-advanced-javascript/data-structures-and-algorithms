'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Stack{
  
  constructor(){
    this.top = null;
  }

  //adding a value to stack
  push(value){
    
    const item = new Node(value);

    item.next = this.top;
    this.top = item;
  }

  //passing the value to something else
  pop(){
    let temp = this.top;

    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }


  peek(){
    // if(!this.isEmpty()){
      return this.top.value
    // }
  }
}


class PseudoQueue{

  constructor(){
    this.front = new Stack();
    this.back = new Stack();
  }

  enqueue(value){
    while(this.front.top){
      let transfer = this.front.pop();
      this.back.push(transfer);
    }
    this.front.push(value);
    while(this.back.top){
      let transfer = this.back.pop();
      this.front.push(transfer);
    }
  }

  dequeue(){
    return this.front.pop();
  }

}

module.exports = {Node, Stack, PseudoQueue};




