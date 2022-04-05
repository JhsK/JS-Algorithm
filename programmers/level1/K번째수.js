function solution(array, commands) {
  let range = [];
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    range.push(array.slice(commands[i][0] - 1, commands[i][1]));
  }

  const sortRange = range.map((item) => item.sort((a, b) => a - b));

  for (let i = 0; i < commands.length; i++) {
    result.push(sortRange[i][commands[i][2] - 1]);
  }

  return result;
}
