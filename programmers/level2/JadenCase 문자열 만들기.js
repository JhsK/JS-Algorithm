function solution(s) {
  s = s.toLowerCase();
  let answer = s
    .split(" ")
    .map((s) => {
      let arr = s.split("");
      if (arr[0] != null) arr[0] = arr[0].toUpperCase();
      return arr.join("");
    })
    .join(" ");
  return answer;
}

// "  for the last week" <- 특수한 경우 고려해야 함
