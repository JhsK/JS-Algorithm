function solution(n, arr1, arr2) {
  let result = [];

  for (let i = 0; i < n; i++) {
    let tmp = arr1[i] | arr2[i];

    if (tmp.toString(2).length < n) {
      result.push("0".repeat(n - tmp.toString(2).length) + tmp.toString(2));
    } else {
      result.push(tmp.toString(2));
    }
  }

  return result.map((x) => x.replace(/0/g, " ").replace(/1/g, "#"));
}

function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};

var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, " ").replace(/1/g, "#")
  );
