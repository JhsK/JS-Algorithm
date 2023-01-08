function test(num, arr) {
  const arrMax = arr[arr.length - 1];
  const arrSum = arr.reduce((a, b) => a + b);
  const target = [];

  let start = arrMax;
  let end = arrSum;

  while (start <= end) {
    let mid = Math.ceil((start - end) / 2);
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] > mid) {
        count++;
        sum = 0;
      }
      sum += arr[i];
    }

    if (sum !== 0) {
      count++;
    }

    if (count > num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

console.log(test(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
