let last = 14000605; // 남은 대기인원
let takePerson = [25, 40, 55, 70, 85, 100];

function takeShipDate(last, person) {
  let allDay = 0; // 1년의 총 일 수
  let calYear = 0;
  let calMonth = 0;
  let calDay = 0;
  let calHour = 0;
  let calMinutes = 0;

  for (let i = 1; i < 11; i++) {
    allDay += 2 ** i;
  }
  calYear = last / 1200 / allDay;
  calMonth = (last / 1200) % allDay;

  let tmp = 0;
  for (let i = 10; i > 0; i--) {
    tmp++;
    if (calMonth < 2 ** i) {
      calDay = calMonth;
      break;
    }
    calMonth = calMonth - 2 ** i;
  }

  calMonth = tmp;
  calHour = (last % 1200) / 100 + 9;

  for (let x in person) {
    if (person[x] > (last % 1200) % 100) {
      calMinutes = x * 10;
      break;
    }
  }

  return `${2020 + parseInt(calYear, 10)}년 ${calMonth}월 ${parseInt(
    calDay,
    10
  )}일 ${parseInt(calHour, 10)}시 ${calMinutes}분 출발`;
}

console.log(takeShipDate(last));
