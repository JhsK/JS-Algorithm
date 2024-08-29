function solution(participant, completion) {
  const hashTable = new Map();
  participant.forEach((person) => {
    if (hashTable.has(person)) {
      hashTable.set(person, hashTable.get(person) + 1);
    } else {
      hashTable.set(person, 1);
    }
  });

  for (let x of completion) {
    if (hashTable.has(x)) {
      hashTable.set(x, hashTable.get(x) - 1);
    }
  }

  for (let [a, b] of hashTable.entries()) {
    if (b >= 1) {
      return a;
    }
  }
}
