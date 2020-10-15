

function insertShiftArray(inputArray, valueToBeAdded){

  let outputArray = [];

  middleOfArray = Math.round(inputArray.length/2);

  for(let i = 0; i < (inputArray.length + 1) ; i++){

    if(i == middleOfArray){

      outputArray[middleOfArray] = valueToBeAdded;

    } else if(i < middleOfArray){

      outputArray[i] = inputArray[i]

    } else if(i > middleOfArray){
      
      outputArray[i] = inputArray[i-1]

    }

  }
  return outputArray;
}

module.exports = insertShiftArray;