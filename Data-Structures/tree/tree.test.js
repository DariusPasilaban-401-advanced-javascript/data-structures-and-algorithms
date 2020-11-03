'use strict';



const Tree = require('./tree.js');
const BinaryTree = Tree.BinaryTree;
const BinarySearchTree = Tree.BinarySearchTree;

test('Can successfully instantiate an empty tree', () => {

  const testBinaryTree = new BinaryTree();

  const results = testBinaryTree;
  expect(results).toEqual({"root": null});
});

test('instantiate a tree with a single root node', () => {
  const testBinarySearchTree = new BinarySearchTree();

  testBinarySearchTree.add(888);
  expect(testBinarySearchTree.root.value).toEqual(888);

  

});

test('add a left child and right child to a single root node', () => {
  const testBinarySearchTree = new BinarySearchTree();

  testBinarySearchTree.add(888);
  testBinarySearchTree.add(999);
  testBinarySearchTree.add(777);
  expect(testBinarySearchTree.root.left.value).toEqual(777);
  expect(testBinarySearchTree.root.right.value).toEqual(999);


})


let ArrOfCol = [888,777,88,999];
test('return a collection from a preorder traversal', () => {
  const testBinarySearchTree = new BinarySearchTree();

  testBinarySearchTree.add(888);
  testBinarySearchTree.add(999);
  testBinarySearchTree.add(777);
  testBinarySearchTree.add(88);
  // testBinarySearchTree.add(99);
  // testBinarySearchTree.add(77);
  // console.log(testBinarySearchTree.preOrder(testBinarySearchTree.root));
  // expect(testBinarySearchTree.preOrder(testBinarySearchTree.root)).toEqual(ArrOfCol);
  expect(testBinarySearchTree).toEqual(ArrOfCol);
})