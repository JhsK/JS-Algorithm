const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((i) => parseInt(i));
const nums = Array(10).fill(0);
arr.forEach((i) => (nums[9 - i] += 1));
let sorted = "";
for (let i = 0; i < nums.length; i++) {
  sorted += String(9 - i).repeat(nums[i]);
}
console.log(sorted);
