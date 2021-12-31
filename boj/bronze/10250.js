// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ["2", "6 12 10", "30 50 72"];
const T = parseInt(input.shift()); // Case 수

// solution 1 N(번째손님)이 H(층수)보다 클 경우 N - H 를 통해 구해주는 방법.
for (let i = 0; i < T; i++) {
  const HWN = input[i].split(" ");
  let H = parseInt(HWN.shift()); // 층
  HWN.shift(); // 가운데 요소는 제거해준다.
  let N = parseInt(HWN.shift()); // N번째 손님
  let roomCnt = 1; // 엘리베이터에서 몇번째로 떨어져있는지.

  while (N > H) {
    roomCnt++;
    N = N - H;
  } // N번째 손님이 층수보다 클 경우 roomCnt를 ++ 해주고 N 에서 H를 빼준다.
  if (roomCnt < 10) {
    console.log(`${N}0${roomCnt}`);
  } else {
    console.log(`${N}${roomCnt}`);
  }
}

// solution 2 N / H 와 N % H 를 통해 구해주는 방법
for (let i = 0; i < T; i++) {
  const HWN = input[i].split(" ");
  let H = parseInt(HWN.shift()); // 층
  HWN.shift(); // 가운데 요소는 제거해준다.
  let N = parseInt(HWN.shift()); // N번째 손님

  const floor = N % H === 0 ? H : N % H; // ex) 12번째손님 % 5층 = 2 이기때문에 이 손님은 2층에 머물게 된다.
  const roomNum = parseInt.isInteger(N / H) ? N / H : Math.ceil(N / H); // 12번째 손님 / 5층은 2.4이다. 이것은 2번째를 넘어서는 그룹 === 3번째 그룹이다. istInteger()를 통해 정수인지 확인을 하고 그렇지 않을 경우 Math.ceil()을 통해 올림하여 정수를 받아온다.

  // 뒤는 solution1이랑 동일하게 console.log() 해준다.
}
