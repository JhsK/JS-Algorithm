function solution(n, arr1, arr2) {
  let result = [];

  arr1 = arr1.map((a) => {
    let tmp = a.toString(2);

    if (tmp.length < n) {
      tmp = "0".repeat(n - tmp.length) + tmp;
    }
    return tmp;
  });

  arr2 = arr2.map((b) => {
    let tmp = b.toString(2);

    if (tmp.length < n) {
      tmp = "0".repeat(n - tmp.length) + tmp;
    }
    return tmp;
  });

  for (let x in arr1) {
    result.push(arr1[x].concat(arr2[x]));
  }

  for (let j of result) {
    j = j.replaceAll("");
  }

  console.log(result);
  // console.log(arr1, arr2);
}
