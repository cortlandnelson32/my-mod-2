const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  // Your code here
  const queue = [start];
  
  const visited = new Set();

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const currentNode = currentPath[currentPath.length - 1];
    if (currentNode === end) {
      return currentPath;
    }
    const neighbors = adjList[currentNode];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
          visited.add(neighbor);
          const newPath = [...currentPath, neighbor];
          queue.push(newPath);
      }
    }
  }
  return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
