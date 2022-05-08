function solution(salaries, days) {
  let result = 0;

  for (let i = 0; i < salaries.length; i++) {
    let num = Math.floor(days / salaries[i][0]);
    if (days % salaries[i][0] === 0) {
      result += salaries[i][1] * num;
    } else {
      if (days > salaries[i][0]) {
        result += salaries[i][1] * num + salaries[i][1];
      } else {
        result += salaries[i][1];
      }
    }
  }

  return result;
}
