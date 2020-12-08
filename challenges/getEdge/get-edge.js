// reference: https://medium.com/@ziyoshams/graphs-in-javascript-cc0ed170b156

doesPathExist(firstNode, secondNode){
  // we will approach this BFS way
  let path = [];
  let visited = this.createVisitedObject();
  let q = [];
  visited[firstNode] = true;
  q.push(firstNode);
  while(q.length){
    let node = q.pop();
    path.push(node);
    let elements = this.AdjList.get(node);
    if(elements.includes(secondNode)){
      console.log(path.join('->'))
      return true;
    }else{
      for(let elem of elements){
        if(!visited[elem]){
          visited[elem] = true;
          q.unshift(elem);
        }
      }
    }
  }
  return false;
}