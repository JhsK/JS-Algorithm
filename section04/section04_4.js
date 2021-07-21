function solution(m, product) {
  let answer = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < product.length; i++) {
    product[i][0] = product[i][0] / 2;
    const sum = product.reduce((a, b) => a[0] + a[1] + (b[0] + b[1]));
    console.log(sum);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
