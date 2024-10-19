function solution(arr1, arr2) {
  const n = arr1.length + arr2.length;
  const result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < n; i++) {
    if (pointer1 === 3) {
      result.push(arr2[pointer2]);
      pointer2++;
    } else if (pointer2 === 3) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      if (arr1[pointer1] <= arr2[pointer2]) {
        result.push(arr1[pointer1]);
        pointer1++;
      } else {
        result.push(arr2[pointer2]);
        pointer2++;
      }
    }
  }

  return result;
}

console.log(solution([1, 3, 5], [2, 4, 6]));
