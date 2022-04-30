function solution(n) {
  let oneArr = n
    .toString(2)
    .split("")
    .filter((v) => v === "1").length;
  let result = n + 1;

  while (result <= 1000000) {
    let resultOneArr = result
      .toString(2)
      .split("")
      .filter((v) => v === "1").length;
    if (oneArr === resultOneArr) break;
    result++;
  }

  return result;
}

console.log(solution(78));
