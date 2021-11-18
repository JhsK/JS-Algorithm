function twoStrings(s1, s2) {
  let answer = "YES";
  let map = new Map();
  const STRING_ONE = s1.split("");
  const STRING_TWO = s2.split("");
  let count = 0;
  
  for (let x of STRING_ONE) {
      if (!map.has(x)) map.set(x, 1);
  }
  for (let x of STRING_TWO) {
      if (map.has(x)) {
          map.delete(x);
          count++;
      }
  }
  
  return count > 0 ? answer = "YES" : answer = "NO";

}

console.log(twoStrings("aaa", "bbb"));