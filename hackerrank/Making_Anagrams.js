function makeAnagram(a, b) {
  const arrA = a.split(""); // 1
  const arrB = b.split("");

  for (let i = a.length - 1; i >= 0; i--) {
    // 2
    for (let j = b.length - 1; j >= 0; j--) {
      if (arrA[i] === arrB[j]) {
        // 3
        arrA.splice(i, 1);
        arrB.splice(j, 1);
      }
    }
  }

  return arrA.length + arrB.length; // 4
}
