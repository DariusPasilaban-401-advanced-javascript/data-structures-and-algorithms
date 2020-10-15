

function binarySearch(sortedArray, searchKey){

  let firstIdx = 0;
  let lastIdx = sortedArray.length - 1;
  middleIdx = Math.floor((lastIdx + firstIdx)/2);

  while(sortedArray[middleIdx] != searchKey && firstIdx < lastIdx){

    if(searchKey < sortedArray[middleIdx]){

      lastIdx = middleIdx -1;

    } else if(searchKey > sortedArray[middleIdx]){

      firstIdx = middleIdx + 1;

    }
    middleIdx = Math.floor((lastIdx + firstIdx)/2)
  }

  return (sortedArray[middleIdx] != searchKey) ? -1 : middleIdx;

}

module.exports = binarySearch;