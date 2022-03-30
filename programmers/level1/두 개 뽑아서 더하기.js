function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let tmp = numbers[i] + numbers[j];
      if (result.indexOf(tmp) === -1) {
        result.push(tmp);
      }
    }
  }

  return result.sort((a, b) => a - b);
}

function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}
