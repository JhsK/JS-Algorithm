function createHashTable(arr, target) {
  const table = new Array(target + 1).fill(0);
  for (const num of arr) {
    if (num <= target) {
      table[num] = 1;
    }
  }

  return table;
}

function solution(arr, target) {
  const table = createHashTable(arr, target);

  for (const num of arr) {
    const complement = target - num;

    if (
      complement >= 0 &&
      complement <= target &&
      complement !== num &&
      table[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([2, 3, 5, 9], 10));
