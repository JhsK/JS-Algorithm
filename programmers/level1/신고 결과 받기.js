function solution(id_list, report, k) {
  let mail = {};
  let reportList = {};

  for (let x of id_list) {
    mail[x] = 0;
    reportList[x] = [];
  }

  for (let x of report) {
    let tmp = x.split(" ");
    if (reportList[tmp[1]].indexOf(tmp[0]) === -1)
      reportList[tmp[1]].push(tmp[0]);
  }

  for (let x of Object.keys(reportList)) {
    if (reportList[x].length >= k) {
      reportList[x].forEach(
        (reporter) => (mail[reporter] = mail[reporter] + 1)
      );
    }
  }

  return Object.values(mail);
}

function solution(id_list, report, k) {
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  return answer;
}
