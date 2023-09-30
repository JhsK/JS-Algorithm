// https://www.acmicpc.net/problem/2884

let inputHour = Number("23");
let inputMinutes = Number("40");

function alarm(hour, minutes) {
  let time = 0;
  let resultHour = 0;
  let resultMinutes = 0;

  if (hour === 0) {
    time = 24 * 60 + minutes;
  } else {
    time = hour * 60 + minutes;
  }
  resultHour = Math.floor((time - 45) / 60);
  resultMinutes = (time - 45) % 60;

  if (resultHour === 24) resultHour = 0;

  console.log(`${resultHour} ${resultMinutes}`);
}

alarm(inputHour, inputMinutes);
