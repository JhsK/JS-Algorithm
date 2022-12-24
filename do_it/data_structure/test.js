function test(arr) {
  let tmp = 0;
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= tmp) {
      while (arr[i] >= tmp) {
        stack.push(tmp);
        tmp++;
        console.log("+");
      }
      stack.pop();
      console.log("-");
    } else {
      let popValue = stack.pop();
      if (popValue > arr[i]) {
        console.log("NO");
        return "NO";
      }
      console.log("-");
    }
  }
}

console.log(test([1,2,5,3,4]));
