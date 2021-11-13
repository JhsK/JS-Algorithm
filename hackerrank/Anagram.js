function anagram(s) {
  let answer = 0;
  if (s.length % 2 !== 0) return (answer = -1);
  let firstString = s.slice(0, s.length / 2);
  let secondString = s.slice(s.length / 2);
  let sH = new Map();

  for (let i = 0; i < firstString.length; i++) {
    if (sH.has(firstString[i]))
      sH.set(firstString[i], sH.get(firstString[i]) + 1);
    else sH.set(firstString[i], 1);
  }

  for (let i = 0; i < secondString.length; i++) {
    if (sH.has(secondString[i]) && sH.get(secondString[i]) > 0) {
      sH.set(secondString[i], sH.get(secondString[i]) - 1);
    } else answer++;
  }

  return answer;
}

console.log(anagram("aaabbb"));
