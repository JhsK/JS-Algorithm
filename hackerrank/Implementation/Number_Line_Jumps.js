function main() {
  var x1_temp = readLine().split(" ");
  var x1 = parseInt(x1_temp[0]);
  var v1 = parseInt(x1_temp[1]);
  var x2 = parseInt(x1_temp[2]);
  var v2 = parseInt(x1_temp[3]);

  if (x1 > x2) {
    if (v1 >= v2) return console.log("NO");
  }

  if (x2 > x1) {
    if (v2 >= v1) return console.log("NO");
  }

  var jump = (x2 - x1) / (v2 - v1);
  console.log(jump % 1 === 0 ? "YES" : "NO");
}
