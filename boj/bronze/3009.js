var fs = require("fs");
var lines = fs.readFileSync("/dev/stdin").toString().split("\n");
var points = lines.map((lines) => {
  const points = lines.split(" ").map((el) => parseInt(el));
  return points;
});

const xList = [];
const yList = [];

for (let point of points) {
  const xIndex = xList.findIndex((el) => el === point[0]);
  if (xIndex != -1) {
    xList.splice(xIndex, 1);
  } else {
    xList.push(point[0]);
  }

  const yIndex = yList.findIndex((el) => el === point[1]);
  if (yIndex != -1) {
    yList.splice(yIndex, 1);
  } else {
    yList.push(point[1]);
  }
}

console.log(`${xList[0]} ${yList[0]}`);
