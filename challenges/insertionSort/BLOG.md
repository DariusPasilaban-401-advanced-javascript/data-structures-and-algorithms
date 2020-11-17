# Insertion Sort

Using insertion sort

How can we turn this array **[1,3,4,2]** into this **[1,2,3,4]**?

Here's the code for the insertion sort

(Reference: https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c )

function insertionSort(inputArr) {
  let length = inputArr.length;
  for(let i = 1; i < length; i++){
    let key = inputArr[i];
    let j = i - 1;

    while(j >= 0 && inputArr[j] > key){
      inputArr[ j + 1 ] = inputArr[j];
      j = j - 1;
    }

    inputArr[j + 1] = key;
  }

  return inputArr;
}

Iteration 0 [1,3,4,2] -> [1,3,4,2]

Iteration 1 [1,3,4,2] -> [1,3,4,2]

Iteration 2 [1,3,4,2] -> [1,2,3,4]


## Break down:

On iteration 0

- key will start with index 1 with the value 3
- j = i - 1 which equates to 0
- while loop, if first condition and second conditions are met, perform the following in the code block
  - since currently j = 0, then the first condition is true
  - second condition is false, since inputArr[j] is equal to 1 and key is 3, which makes the key greater in value.

On iteration 1 and 2

- Almost the same as iteration 0, except key is now equal to 2, and will increment by 1 every time the for loop iterates. After the for loop, while loop will keep persisting until the 2 conditions are met. In the process of getting a false in that while loop, the numbers are getting sorted.