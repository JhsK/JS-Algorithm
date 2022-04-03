function solution(nums) {
  let result = [];
  let max = parseInt(nums.length / 2, 10);

  for (let x of nums) {
    if (result.indexOf(x) === -1) result.push(x);
  }
  return result.length > max ? max : result.length;
}

function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}
