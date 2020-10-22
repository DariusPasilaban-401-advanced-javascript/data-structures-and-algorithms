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