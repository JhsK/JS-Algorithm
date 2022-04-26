function solution(fees, records) {
  let progress = {};
  let arrangeTime = {};
  let charge = {};
  let closeTime = "23:59".split(":")[0] * 60 + Number("23:59".split(":")[1]);

  for (let x of records) {
    let record = x.split(" ");
    if (!arrangeTime.hasOwnProperty(record[1])) {
      arrangeTime[record[1]] = 0;
    }
  }

  for (let x of records) {
    let record = x.split(" ");
    if (progress.hasOwnProperty(record[1]) && !progress[record[1]].state) {
      let inTime =
        progress[record[1]].time.split(":")[0] * 60 +
        Number(progress[record[1]].time.split(":")[1]);
      let outTime =
        record[0].split(":")[0] * 60 + Number(record[0].split(":")[1]);
      arrangeTime[record[1]] += outTime - inTime;
      progress[record[1]] = { time: record[0], state: true };
    } else progress[record[1]] = { time: record[0], state: false };
  }

  for (let [key, value] of Object.entries(progress)) {
    if (!value.state) {
      let inTime =
        value.time.split(":")[0] * 60 + Number(value.time.split(":")[1]);
      arrangeTime[key] += closeTime - inTime;
    }
  }

  for (let [key, value] of Object.entries(arrangeTime)) {
    if (value <= fees[0]) charge[key] = fees[1];
    else {
      charge[key] = fees[1] + Math.ceil((value - fees[0]) / fees[2]) * fees[3];
    }
  }

  let result = Object.entries(charge).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );

  return result.map((item) => item[1]);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
