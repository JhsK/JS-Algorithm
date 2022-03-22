function solution(s) {
  let arr = s.split("").map((v) => v.charCodeAt());

  return arr
    .sort((a, b) => b - a)
    .map((v) => String.fromCharCode(v))
    .join("");
}

function solution(s) {
  return s.split("").sort().reverse().join("");
}
