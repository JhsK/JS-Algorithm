function solution(absolutes, signs) {
  let filterSings = signs.map((v) => (v === true ? 1 : -1));
  return absolutes.reduce((a, b, i) => {
    return a + b * filterSings[i];
  }, 0);
}

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
