function gameOfThrones(s) {
  let word = s.split("").sort();
  let oddCounter = 0;
  let counter = 1;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i + 1]) counter++;
    else {
      if (counter % 2 == 1) {
        oddCounter++;
        if (oddCounter > 1) return "NO";
      }
      counter = 1;
    }
  }
  return "YES";
}
