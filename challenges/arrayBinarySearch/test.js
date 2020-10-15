'use strict';
const binarySearch = require('./array-binary-search.js');

  test('Return the index of an array\'s, element that is equal to the search key', () => {
    const arr1 = [4,8,15,16,23,42];
    const value = 42;
    expect(binarySearch(arr1, value)).toEqual(5);
});