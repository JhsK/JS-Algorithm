function repeat(answers, student) {
  let tmp = 0;
  for (let i = 0; i < answers.length; i++) {
    if (i > student.length) {
      if (answers[i] === student[student.length - 1 - i]) tmp++;
    } else {
      if (answers[i] === student[i]) tmp++;
    }
  }

  return tmp;
}

function solution(answers) {
  let correct = [];
  let result = [];
  let max = -1;
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  correct.push([1, repeat(answers, one)]);
  correct.push([2, repeat(answers, two)]);
  correct.push([3, repeat(answers, three)]);

  correct.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < correct.length; i++) {
    if (correct[i][1] > max) {
      max = correct[i][1];
      result = [correct[i][0]];
      continue;
    }
    if (correct[i][1] === max) result.push(correct[i][0]);
  }

  console.log(result);
}

console.log(solution([3, 2, 3, 4, 5]));
