function solution(s) {
  let max = Math.max(...s.split(" "));
  let min = Math.min(...s.split(" "));

  return `${min} ${max}`;
}
