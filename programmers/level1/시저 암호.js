function solution(s, n) {
  let result = "";

  for (let x of s) {
    if (x === " ") {
      result += x;
    } else {
      let tmp = x.charCodeAt() + n;
      if (
        (x.charCodeAt() <= 90 && tmp > 90) ||
        (x.charCodeAt() <= 122 && tmp > 122)
      ) {
        tmp = tmp - 26;
      }
      result += String.fromCharCode(tmp);
    }
  }

  return result;
}
