function solution(n) {
  const nArr = new Array(n).fill(1);
  nArr[0] = 0;
  for (let i = 2; i * i <= n; i++) {
    //제곱근까지 순회

    for (let j = i * i; j <= n; j += i) {
      nArr[j - 1] = 0;
    }
  }

  return nArr.filter((el) => el == 1).length;
}

function solution(n) {
  let arr = new Array(n + 1).fill(1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i * i <= n; i++) {
    if (arr[i] === 0) continue;

    for (let j = i * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((v) => v === 1).length;
}

// https://www.youtube.com/watch?v=5ypkoEgFdH8
