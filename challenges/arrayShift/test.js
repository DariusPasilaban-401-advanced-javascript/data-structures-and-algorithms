'use strict';
const shift = require('./array-shift.js');

  test('shift an array', () => {
    const arr1 = [2,4,6,8];
    const valueToBeAdded = 5;
    expect(shift(arr1, valueToBeAdded)).toEqual([2,4,5,6,8]);
});
