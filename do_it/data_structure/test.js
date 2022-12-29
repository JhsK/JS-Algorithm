let bingo = 0;

const merge = (left, right) => {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      bingo++;
    }
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
};

function test(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(test(left), test(right));

}

console.log(test([3, 2, 8, 1, 7, 4, 5, 6]));
console.log(bingo);
