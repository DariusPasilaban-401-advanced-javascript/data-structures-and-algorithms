

function findRW(str){

  let strArr = str.split(' ');
  // console.log(strArr);

  let arrOfRepeatWords = [];

  for(let arrIndex = 0; arrIndex < strArr.length; arrIndex++){

    for(let i = arrIndex + 1; i < strArr.length; i++){
      if(strArr[arrIndex] === strArr[i]){
      arrOfRepeatWords.push(strArr[arrIndex]);
      }
    }
    
  }

  return arrOfRepeatWords;

}

module.exports = findRW;