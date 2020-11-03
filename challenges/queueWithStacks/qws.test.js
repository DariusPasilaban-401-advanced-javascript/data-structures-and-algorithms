'use strict';

let objs = require('./queue-with-stacks');

let PseudoQeueu = objs.PseudoQueue;

test('enqueue working?', () => {

  let testPseudoQueue = new PseudoQeueu();

  testPseudoQueue.enqueue(9);
  testPseudoQueue.enqueue(8);
  testPseudoQueue.enqueue(7);
  expect(testPseudoQueue.front.peek()).toEqual(9);
})

test('dequeue working?', () => {

  let testPseudoQueue = new PseudoQeueu();
  testPseudoQueue.enqueue(8);
  testPseudoQueue.enqueue(7);

  expect(testPseudoQueue.dequeue()).toEqual(8);
})
