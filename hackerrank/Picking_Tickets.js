function maxTickets(tickets) {
  let array = tickets.sort((a, b) => a - b);
  let answer = [[]];
  let tmp = [];
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (
      (array[i] - array[i - 1] === 1 || array[i] - array[i - 1] === 0) &&
      (array[i + 1] - array[i] === 1 || array[i + 1] - array[i] === 0)
    )
      tmp.push(array[i]);
    else if (
      array[i] - array[i - 1] === 1 ||
      array[i] - array[i - 1] === 0 ||
      array[i + 1] - array[i] === 1 ||
      array[i + 1] - array[i] === 0
    ) {
      if (tmp.length > 0) {
        tmp.push(array[i]);
        answer.push(tmp);
        tmp = [];
      } else {
        tmp.push(array[i]);
      }
    }
  }

  for (let answerLength of answer) {
    if (answerLength.length >= max) max = answerLength.length;
  }

  return max;
}

console.log(maxTickets([4, 13, 2, 3]));
