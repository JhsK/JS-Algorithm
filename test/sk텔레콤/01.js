function solution(p) {
  const locArr = Array.from({ length: p.length }, () => 0);
  const len = p.length;

  for (let i = 0; i < len; i++) {
    let tmp = p.slice(i);
    let min = Math.min(...tmp);

    if (p[i] !== min) {
      locArr[i] += 1;
      locArr[p.indexOf(min)] += 1;
      p[p.indexOf(min)] = p[i];
      p[i] = min;
    }
  }

  console.log(locArr);
}

console.log(solution([2, 5, 3, 1, 4]));
