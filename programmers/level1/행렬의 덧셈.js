function solution(arr1, arr2) {
  let answer = [];
  let tmp = 0;

  for (let x of arr1) {
    answer.push(x.map((v, i) => v + arr2[tmp][i]));
    tmp++;
  }

  return answer;
}

function sumMatrix(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
