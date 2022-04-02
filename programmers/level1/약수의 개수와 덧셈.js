function calrest(n) {
  let tmp = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      tmp++;
    }
  }

  return tmp;
}

function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    if (calrest(i) % 2 === 0) {
      console.log("+", i, calrest(i));
      result += i;
    } else {
      console.log(i, calrest(i));
      result -= i;
    }
  }

  return result;
}

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
