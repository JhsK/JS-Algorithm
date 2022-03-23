function solution(arr, divisor) {
  let result = arr.filter((i) => i % divisor === 0);

  if (result.length === 0) result.push(-1);

  return result.length > 1 ? result.sort((a, b) => a - b) : result;
}
