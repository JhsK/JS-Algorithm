// function solution(n, left, right) {
//   let basic = Array.from({ length: n }, () => 0).map((_) =>
//     Array.from({ length: n }, () => 0)
//   );

//   for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= i - 1; j++) {
//       for (let z = 0; z <= i - 1; z++) {
//         if (basic[j][z] === 0) basic[j][z] = i;
//       }
//     }
//   }

//   return basic.flat().slice(left, right + 1);
// }

function solution(n, left, right) {
  const ans = [];

  while (left <= right) {
    ans.push(Math.max(Math.floor(left / n), left++ % n) + 1);
  }

  return ans;
}

console.log(solution(3, 2, 5));
