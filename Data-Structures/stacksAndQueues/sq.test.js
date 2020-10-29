

'use strict';

const StackOrQueue = require('./stacks-and-queues.js');
const Stack = StackOrQueue.Stack;
const Queue = StackOrQueue.Queue;

test('Can successfully push onto a stack', () => {
  const testStack = new Stack();
  testStack.push(7);
  testStack.push(5);
  testStack.push(4);

  const results = testStack.peek();
  expect(results).toEqual(4);
});

test('Can successfully push multiple values onto a stack', () => {
  const testStack = new Stack();
  testStack.push(5);
  testStack.push(4);

  const results = testStack.peek();
  expect(results).toEqual(4);
})

test('Can successfully pop off the stack', () => {
  const testStack = new Stack();

  testStack.push(55);
  testStack.push(44);
  testStack.push(77);

  const results = testStack.pop()
  expect(results).toEqual(77);
})

test('Can successfully empty a stack after multiple pops', () => {
  const testStack = new Stack();

  testStack.push(111);
  testStack.push(222);
  testStack.push(333);
  testStack.pop();
  testStack.pop();
  testStack.pop();

  const results = testStack.isEmpty();
  expect(results).toEqual(true);
})

test('Can successfully peek the next item on the stack', () => {
  const testStack = new Stack();

  testStack.push(9);
  testStack.push(10);

  const result = testStack.peek();
  expect(result).toEqual(10);
})

test('Can successfully instantiate an empty stack', () => {
  const testStack = new Stack();

  const result = testStack.isEmpty();
  expect(result).toEqual(true);
})

test('Calling pop or peek on empty stack raises exception', () => {
  const testStack = new Stack();

  const result = testStack.pop();
  expect(result).toEqual('stack is empty')
})

// ======= Queue tests


test('Can successfully enqueue into a queue', () => {
  const testQueue = new Queue();

  testQueue.enqueue(1);

  expect(testQueue.peek()).toEqual(1);
})

test('Can successfully enqueue multiple values into a queue', () => {
  const testQueue = new Queue();

  testQueue.enqueue(1);
  testQueue.enqueue(2);
  testQueue.enqueue(3);

  expect(testQueue.peek()).toEqual(1);
  expect(testQueue.rear.value).toEqual(3);

})

test('Can successfully dequeue out of a queue the expected value', () => {
  const testQueue = new Queue();

  testQueue.enqueue(1);
  testQueue.enqueue(2);
  testQueue.enqueue(3);

  expect(testQueue.dequeue()).toEqual(1);
})

test('Can successfully peek into a queue, seeing the expected value', () => {
  const testQueue = new Queue();

  testQueue.enqueue(1);
  testQueue.enqueue(2);
  testQueue.enqueue(3);

  expect(testQueue.peek()).toEqual(1);
})


test('Can successfully empty a queue after multiple dequeues', () => {
  const testQueue = new Queue();

  testQueue.enqueue(11);
  testQueue.enqueue(22);
  testQueue.enqueue(33);
  testQueue.dequeue();
  testQueue.dequeue();
  // testQueue.dequeue();

 
  expect(testQueue.isEmpty()).toEqual(true);

})
