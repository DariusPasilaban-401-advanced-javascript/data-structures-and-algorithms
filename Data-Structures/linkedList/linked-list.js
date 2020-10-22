



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
}

module.exports = LinkedList;