
depthFirst(startNode) {

  const stack = [];
  const visited = new Set();
  let currentNode = startNode;

  stack.push(currentNode);

  while (stack.length) {

    visited.add(currentNode);

    const neighbors = this.getNeighbors(currentNode);

    for (let neighbor of neighbors) {
      let node = neighbor.vertex;

      if (!visited.has(node)) {
        // we need to push the children of each neighbor into the stack before the rest of the neighbors,
        //  we should pivot to a recursive solution
        stack.push(node);
      }
    }

    currentNode = stack.pop();
  }

  return visited;
}