function solution(s) {
  const dictionary = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let str = "";
  let result = "";

  for (let x of s) {
    if (isNaN(x)) {
      str += x;
      if (dictionary.indexOf(str) !== -1) {
        result += dictionary.indexOf(str);
        str = "";
      }
    } else {
      result += x;
    }
  }

  return Number(result);
}

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
