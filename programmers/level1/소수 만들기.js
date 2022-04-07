function isPrime(sum) {
  for (let i = 2; i <= Math.sqrt(sum); i++) {
    if (sum % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let result = 0;
  let stack = [];
  let arr = nums.slice();

  for (let i = 0; i < nums.length; i++) {
    let stackTmp = nums[i];
    stack.push(nums[i]);
    arr.shift();
    for (let j = 0; j < arr.length; j++) {
      if (j === arr.length - 1) break;
      let secondTmp = arr[j];
      for (let z = j + 1; z < arr.length; z++) {
        let numsTmp = arr[z];
        if (isPrime(stackTmp + secondTmp + numsTmp)) result++;
      }
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4]));
