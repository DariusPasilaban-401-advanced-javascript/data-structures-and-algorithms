'use strict';


function reverseArray(array){
  const resultArray = [];

  for(let i = 0; i < array.length; i++){
    resultArray[i] = array[(array.length-1)-i];
  }

  return resultArray;
}



module.exports = reverseArray;



