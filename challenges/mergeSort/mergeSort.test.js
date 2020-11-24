const mergeSort = require('./mergeSort');

describe('merge sort', () => {
  test('is merge sort function working?', () => {

    let result = mergeSort([4,3,6,5]);
    expect(result).toEqual([3,4,5,6]);
  })
})