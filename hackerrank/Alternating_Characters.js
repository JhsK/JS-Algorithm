function alternatingCharacters(s) {
  let cnt = 0;
  let removeArr = [];
  let params = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      removeArr.push(i);
      cnt++;
    }
  }

  let result = params.filter((item, index) => !removeArr.includes(index));

  return cnt;
}

console.log(alternatingCharacters("AAABBB"));
