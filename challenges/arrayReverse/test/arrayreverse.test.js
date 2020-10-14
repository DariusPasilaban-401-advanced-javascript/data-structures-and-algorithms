'use strict';
const reverse = require('../array-reverse.js');

  test('reverse an array', () => {
    const arr1 = [1,2,3,4,5,6];
    expect(reverse(arr1)).toEqual([6,5,4,3,2,1]);
});
