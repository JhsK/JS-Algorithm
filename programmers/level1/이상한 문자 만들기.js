function solution(s) {
  let arr = s.split(" ");

  const result = arr.map((v) => {
    let tmp = "";
    for (let i = 0; i < v.length; i++) {
      if (i === 0 || i % 2 === 0) tmp += v[i].toUpperCase();
      else tmp += v[i].toLowerCase();
    }
    return tmp;
  });

  return result.join(" ");
}
