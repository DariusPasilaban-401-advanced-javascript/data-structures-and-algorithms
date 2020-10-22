'use strict';
const LinkedList = require('./linked-list.js');

  test('Testing toString()', () => {
    const linkedlist = new LinkedList();
    expect(linkedlist.head).toBeNull();
});

test('Testing insert()', () => {
  const linkedlist = new LinkedList();
  linkedlist.insert(4);
  linkedlist.insert(99);
  linkedlist.insert(777);


  const results = linkedlist.toString();
  console.log(linkedlist);
  expect(results).toEqual('777 => 99 => 4 => NULL');
});

test('Testing includes()', () => {
  const linkedlist = new LinkedList();
  linkedlist.insert(4);
  linkedlist.insert(5);
  linkedlist.insert(6);


  expect(linkedlist.includes(5)).toBeTruthy();
  expect(linkedlist.includes(35)).toBeFalsy();

});


test('Testing append()', () => {
  const linkedlist = new LinkedList();
  linkedlist.insert(4);
  linkedlist.insert(99);
  linkedlist.insert(777);
  linkedlist.append(8);


  const results = linkedlist.toString();
  console.log(linkedlist);
  expect(results).toEqual('777 => 99 => 4 => 8 => NULL');
});

//Thanks to https://stackoverflow.com/questions/6824067/manual-linked-list-insert-before-method
test('Testing insertBefore()', () => {
  const linkedlist = new LinkedList();
  linkedlist.insert(4);
  linkedlist.insert(99);
  linkedlist.insert(777);
  linkedlist.append(8);
  linkedlist.insertBefore(4,100);


  const results = linkedlist.toString();
  console.log(linkedlist);
  expect(results).toEqual('777 => 99 => 100 => 4 => 8 => NULL');
});



test('Testing insertAfter()', () => {
  const linkedlist = new LinkedList();
  linkedlist.insert(4);
  linkedlist.insert(99);
  linkedlist.insert(777);
  linkedlist.append(8);
  linkedlist.insertAfter(4,979);


  const results = linkedlist.toString();
  console.log(linkedlist);
  expect(results).toEqual('777 => 99 => 4 => 979 => 8 => NULL');
});