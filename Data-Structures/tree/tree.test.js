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
  expect(testBinarySearchTree.preOrder(testBinarySearchTree.root)).toEqual(ArrOfCol);
  // console.log(testBinarySearchTree.preOrder(testBinarySearchTree.root));
  // console.log(testBinarySearchTree.root.left);


})

let ArrOfCol2 = [88,777,888,999];
test('return a collection from an inorder traversal', () => {
  const testBinarySearchTree = new BinarySearchTree();

  testBinarySearchTree.add(888);
  testBinarySearchTree.add(999);
  testBinarySearchTree.add(777);
  testBinarySearchTree.add(88);
  // console.log(testBinarySearchTree);
  expect(testBinarySearchTree.inOrder(testBinarySearchTree.root)).toEqual(ArrOfCol2);

})

let ArrOfCol3 = [88,777,999,888];
test('return a collection from a postorder traversal', () => {
  const testBinarySearchTree = new BinarySearchTree();

  testBinarySearchTree.add(888);
  testBinarySearchTree.add(999);
  testBinarySearchTree.add(777);
  testBinarySearchTree.add(88);
  // console.log(testBinarySearchTree);
  expect(testBinarySearchTree.postOrder(testBinarySearchTree.root)).toEqual(ArrOfCol3);

})