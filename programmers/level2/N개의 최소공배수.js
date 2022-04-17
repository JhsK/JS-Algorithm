function isLcd(a, b) {
  let min = Math.max(a, b);
  let max = Math.min(a, b);
  let tmp = [min, max];

  while (max !== 0) {
    let r = min % max;
    min = max;
    max = r;
  }
  console.log("min", a);

  return (tmp[0] * tmp[1]) / a;
}

function solution(arr) {
  let tmp = [];

  for (let x of arr) {
    if (tmp.length === 0) tmp.push(x);
    else {
      tmp = [isLcd(tmp[0], x)];
    }
  }

  console.log(tmp);
}

console.log(solution([2, 6, 8, 14]));

// 최소공배수를 구하기 위해 유클리드 호제법을 이용하여 최소공약수를 구하고 그걸 이용하여 최소공배수를 구한다. 여러 개으 최소 공배수는 2개의 수 중 최소공배수를 구하고 구한 최소공배수랑 다음 수랑 다시 최소공배수를 구하는 식으로 문제를 풀어나간다

// const gcd = (a, b) => {
//   while (b > 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// };

// const lcm = (a, b) => {
//   return (a * b) / gcd(a, b);
// };

// const solution = (arr) => {
//   let answer = 1;
//   for (let i = 0; i < arr.length; i++) {
//     answer = lcm(answer, arr[i]);
//   }

//   return answer;
// };
