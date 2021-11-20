function gradingStudents(grades) {
  let answer = [];
  for (let i = 0; i < grades.length; i++) {
    let lineNum = Math.floor(grades[i] / 5) * 5 + 5;
    if (grades[i] < 38) answer.push(grades[i]);
    else {
      if (lineNum - grades[i] < 3) answer.push(lineNum);
      else answer.push(grades[i]);
    }
  }
  return answer;
}

console.log(gradingStudents([75, 67, 38, 33]));
