function gemstones(arr) {
  let combined = arr.join("");
  let unique = [...new Set(combined)];
  let result = unique.filter((ch) => arr.every((str) => str.includes(ch)));
  return result.length;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
