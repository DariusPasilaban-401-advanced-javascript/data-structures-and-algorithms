'use strict';

// Reference https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
export let insertionSort = (inputArr) => {
  let length = inputArr.length;
  for(let i = 1; i < inputArr.length; i++){
    let key = inputArr[i];
    let j = i = 1;

    while(j >= 0 && inputArr[j] > key){
      inputArr[ j + 1 ] = inputArr[j];
      j = j - 1;
    }

    inputArr[j + 1] = key;
  }

  return inputArr;
}

// module.export = insertionSort;

export {insertionSort};