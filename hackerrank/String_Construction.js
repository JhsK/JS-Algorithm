function stringConstruction(s) {
  let count = 0;
  let map = new Map();
  const paramString = s.split("");
  
  for (let x of paramString) {
      if (!map.has(x)) {
          map.set(x, 1);
          count++;
      }
  }
  
  return count;
}

console.log(stringConstruction("aabb"));