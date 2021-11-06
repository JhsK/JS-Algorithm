function gemstones(arr) {
  let allParam = arr.join("");
  let overlap = [...new Set(allParam)];
  let result = overlap.filter((ch) => arr.every((str) => str.includes(ch)));
  return result.length;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
