'use strict';

const insertionSort = require('./insertionSort.js')

test('insertion sort working?', () => {
  let arr1 = [1,3,4,2];

  let answer = insertionSort(arr1);
  console.log(answer);
  expect(answer).toEqual([1,2,3,4]);

})