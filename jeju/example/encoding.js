let param = [
  "   + -- + - + -   ",
  "   + --- + - +   ",
  "   + -- + - + -   ",
  "   + - + - + - +   ",
];

let result = "";

for (let x of param) {
  result += String.fromCharCode(
    parseInt(x.replace(/ /g, "").replace(/\+/g, "1").replace(/-/g, "0"), 2)
  );
}

console.log(result);
