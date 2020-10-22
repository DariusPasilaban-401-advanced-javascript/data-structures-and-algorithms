



//class for the Node
class Node{

  constructor(value = null){
  this.value = value;
  this.next = null;
  }

}

//class for the linked list
class LinkedList {

  constructor(head = null){
    this.head = head;
    this.current = this.head;
  }

  traverse() {
    //set a variable to the very first node of the list
    let current = this.head;

    //start traversing with while loop
    while(current){
      console.log(current);
      current = current.next;
    }

    console.log('reached the end of the list')
  }

  //adds a new node with value to linked list
  insert(valueToAdd){
    this.current = this.head;
    let node = new Node(valueToAdd);
    node.next = this.head;
    this.head = node;
  }


  includes(valueToFindInList){
    
   //set a variable to the very first node of the list
    let current = this.head;

    //start traversing with while loop
    while(current){
      if(valueToFindInList === current.value){

        return true;

      } else if(valueToFindInList != current.value){

          current = current.next;

      } 
    }

    return false;
  }




  toString(){
    //set a variable to the very first node of the list
     this.current = this.head;
     if(this.head == null){
       return '';
     }

    let toStringResult = '';
    //start traversing with while loop
    while(this.current !== null){
      toStringResult += `${this.current.value} => `
      this.current = this.current.next;
    }

    toStringResult += 'NULL';
    return toStringResult;
    // console.log('reached the end of the list')

    
  }



//Thanks to https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
  append(value){

    //see lines 6-13
    //1 create a new node
    //2 put in value
    //3 set next to null
    let newNode = new Node(value);

    //4 if linked list is empty, then make the new node head
    if(!this.head){
      this.head = newNode;
      return this.head;
    } 

    let tail = this.head
    while(tail.next !== null){
      tail = tail.next;
    }

    tail.next = newNode;
    return this.head;

    

  }


  //Thanks to https://stackoverflow.com/questions/6824067/manual-linked-list-insert-before-method
  insertBefore(value, newVal){

    let current = this.head;


    while(current.next != null){
      
      if (current.next.value === value){
        let newNode = new Node(newVal);
        newNode.next = current.next;
        current.next = newNode;
        return
      }
      current = current.next;
    }

    return this.head;

  }



  insertAfter(value, newVal){

    let current = this.head;


    while(current.next != null){
      
      if (current.value === value){
        let newNode = new Node(newVal);
        newNode.next = current.next;
        current.next = newNode;
        return
      }
      current = current.next;
    }

    return this.head;

  }


}

module.exports = LinkedList;