
//class for the Node
class Node{

  constructor(value){
  this.value = value;
  this.next = null;
  }

}

//class for the linked list
class LinkedList {

  constructor(head = null){
    this.head = head;
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
    let addedNode = new Node(valueToAdd);

    //need to traverser
    let current = this.head;

    //start traversing with while loop
    //when current is null (end was reached)
    while(current){

      //add something before we hit end
      //current === null
      if(current.next === null){
        current.next = addedNode;
        return this;
      }

      current = current.next;
    }
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

    return 'Reached the end of the list, value does not exist'
  }




  toString(){
    //set a variable to the very first node of the list
    let current = this.head;

    //start traversing with while loop
    while(current){
      toStringResult += current.value + arrowSign;
      current = current.next;
    }

    toStringResult += 'NULL';
    // console.log('reached the end of the list')

    
  }
}


const newNode1 = new Node(1);
const newNode2 = new Node([1, 2, 3]);

const linkedlist = new LinkedList(newNode1);


// ======== insert() sample
// linkedlist.insert(newNode2);
linkedlist.insert(4);
linkedlist.insert(7);


// ======== includes() sample
linkedlist.includes(77);


// ======== toString() sample
let toStringResult = '';
let arrowSign = ' -> '
linkedlist.toString();
console.log(toStringResult);



// ===================== Code Challenge: Class 06

// append(value){

// }

// insertBefore(value, newVal){

// }


// insertAfter(value, newVal){
  
// }