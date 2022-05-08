function solution(rooms, target) {
  let exclude = [];
  let roomLength = {};
  for (let i = 0; i < rooms.length; i++) {
    let roomNum = rooms[i].match(/\[.*\]/g)[0].slice(1, -1);
    let person = rooms[i].replace(/\[.*\]/g, "").split(",");

    if (roomNum == target) {
      exclude = [...person];
      continue;
    }

    for (let x of person) {
      if (roomLength.hasOwnProperty(x)) {
        roomLength[x] = roomLength[x] + 1;
      } else {
        roomLength[x] = 1;
      }
    }
  }

  if (exclude.length > 0) {
    for (let x of exclude) {
      if (roomLength.hasOwnProperty(x)) {
        delete roomLength[x];
      }
    }
  }

  let roomLengthArr = Object.entries(roomLength).sort((a, b) => a[1] - b[1]);
  console.log(roomLengthArr);
  return null;
}

console.log(
  solution(["[403]James", "[404]Azad,Louis,Andy,James", "[101]Azad,Guard"], 403)
);
