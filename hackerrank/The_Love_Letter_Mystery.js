function calChar(front, back) {
  let cnt = 0;
  for (let i = 0; i < front.length; i++) {
    if (front[i] !== back[front.length - 1 - i]) {
      cnt += Math.abs(
        front[i].charCodeAt() - back[front.length - 1 - i].charCodeAt()
      );
    }
  }

  return cnt;
}

function theLoveLetterMystery(s) {
  let answer = 0;
  if (s !== s.split("").reverse().join("")) {
    let tmp = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
      let front = s.slice(0, tmp);
      let back = s.slice(tmp);
      answer = calChar(front, back);
    } else {
      let front = s.slice(0, tmp);
      let back = s.slice(tmp + 1);
      answer = calChar(front, back);
    }
  }

  return answer;
}

console.log(theLoveLetterMystery("bafhaef"));
