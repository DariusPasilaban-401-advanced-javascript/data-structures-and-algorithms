'use strict';

import * as MyFn from './insertionSort.js';


test('insertion sort working?', () => {
  let arr1 = [1,3,4,2];

  
  expect(MyFn.insertionSort(arr1)).toEqual([1,2,3,4]);

})