function solution(numbers) {
  let arr = Array.from({ length: 10 }, (v, i) => i + 0);

  for (let x of numbers) {
    arr.splice(arr.indexOf(x), 1);
  }

  return arr.reduce((a, b) => a + b);
}

function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
