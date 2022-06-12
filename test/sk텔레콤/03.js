function solution(n, plans, clients) {
  const result = [];
  const serviceArr = [];
  const plansArr = plans.map((v, i) => {
    const tmp = v.split(" ").slice(1);
    const splitArr = v.split(" ");
    splitArr.unshift(i);
    if (i === 0) serviceArr.push([...tmp]);
    else serviceArr.push([...serviceArr[i - 1], ...tmp]);
    return splitArr;
  });

  for (let i = 0; i < clients.length; i++) {
    let tmp = clients[i].split(" ");

    const filterResult = plansArr.filter((v, index) => {
      if (Number(v[1]) < Number(tmp[0])) return false;
      const plansService = serviceArr[index];
      const clientsService = tmp.slice(1);
      let isbool;

      for (let j = 0; j < clientsService.length; j++) {
        if (plansService.indexOf(clientsService[j]) === -1) {
          isbool = false;
          break;
        }
        isbool = true;
      }

      return isbool;
    });

    if (filterResult.length === 0) result.push(0);
    else result.push(filterResult[0][0] + 1);
  }

  console.log(result);
}

console.log(
  solution(
    5,
    ["100 1 3", "500 4", "2000 5"],
    ["300 3 5", "1500 1", "100 1 3", "50 1 2"]
  )
);
