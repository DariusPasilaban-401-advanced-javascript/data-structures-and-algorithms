'use strict';

let FBT = require('./fizz-buzz-tree');
let BinarySearchTree = FBT.BinarySearchTree;




test('If the value is divisible by 3, replace the value with “Fizz”', () => {

  let testBinarySearchTree = new BinarySearchTree();

  testBinarySearchTree.add(9);
  testBinarySearchTree.add(3);
  testBinarySearchTree.add(6);
  testBinarySearchTree.add(12);
  testBinarySearchTree.add(15);

  let mirrorTestBinarySearchTree = testBinarySearchTree;

  // console.log(JSON.stringify(mirrorTestBinarySearchTree.FizzBuzzTree(mirrorTestBinarySearchTree.root)));
  console.log(JSON.stringify(mirrorTestBinarySearchTree.FizzBuzzTree(mirrorTestBinarySearchTree.root)) );


})
