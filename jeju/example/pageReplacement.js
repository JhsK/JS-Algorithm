let guest = [
  "척추동물",
  "어류",
  "척추동물",
  "무척추동물",
  "파충류",
  "척추동물",
  "어류",
  "파충류",
];

function Chair(guest, last) {
  let empty = [];
  let time = 0;

  for (let x of guest) {
    if (empty.length < 3) {
      if (empty.includes(x)) {
        empty.splice(empty.indexOf(x), 1);
        empty.push(x);
        time += 1;
      } else {
        empty.push(x);
        time += 60;
      }
    } else {
      if (empty.includes(x)) {
        empty.splice(empty.indexOf(x), 1);
        empty.push(x);
        time += 1;
      } else {
        empty.shift();
        empty.push(x);
        time += 60;
      }
    }
  }

  return `${parseInt(time / 60, 10)}분 ${time % 60}초`;
}

console.log(Chair(guest, 3));
