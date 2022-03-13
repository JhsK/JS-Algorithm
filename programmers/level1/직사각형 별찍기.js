process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  function createStar(row, col) {
    let result = "";
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        result += "*";
      }
      result += "\n";
    }

    return result;
  }

  console.log(createStar(a, b));
});

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});
