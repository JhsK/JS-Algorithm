function compareMap(mapA, mapB) {
  if (!(mapA.size === mapB.size)) return false;

  for ([key, val] of mapA) {
    if (!mapB.has(key)) return false;
    else if (mapB.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let mapA = new Map();
  let mapB = new Map();
  let lt = 0;

  for (let x of t) {
    if (mapB.has(x)) mapB.set(x, mapB.get(x) + 1);
    else mapB.set(x, 1);
  }

  for (let rt = 0; rt < s.length; rt++) {
    if (mapA.has(s[rt])) mapA.set(s[rt], mapA.get(s[rt]) + 1);
    else mapA.set(s[rt], 1);
    if (rt >= mapB.size - 1) {
      let compare = compareMap(mapA, mapB);
      if (compare) answer++;
      if (mapA.get(s[lt]) > 1) {
        mapA.set(s[lt], mapA.get(s[lt]) - 1);
        lt++;
      } else mapA.delete(s[lt++]);
    }
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
