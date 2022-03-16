function solution(n, m) {
  let answer = [];
  let big = n >= m ? n : m;
  let small = big === n ? m : n;
  let r = 0;

  while (big % small !== 0) {
    r = big % small;
    big = small;
    small = r;
  }

  answer.push(small);
  answer.push((n * m) / small);

  return answer;
}

function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
