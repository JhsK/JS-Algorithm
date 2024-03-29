function solution(strings, n) {
  let result = strings.sort((a, b) => {
    if (a[n].charCodeAt() > b[n].charCodeAt()) return 1;
    if (a[n].charCodeAt() < b[n].charCodeAt()) return -1;
    if (a[n].charCodeAt() === b[n].charCodeAt()) return a.localeCompare(b);
  });

  return result;
}

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}
