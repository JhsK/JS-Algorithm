function test(arr) {
  const sortArr = [...arr].sort((a, b) => a - b);
  const calIndex = [];

  for (let i = 0; i < arr.length; i++) {
    calIndex.push(arr.indexOf(sortArr[i]) - i);
  }
  return Math.max(...calIndex) + 1;
}

console.log(test([10, 1, 5, 2, 3]));
