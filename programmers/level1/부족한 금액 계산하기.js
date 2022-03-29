function solution(price, money, count) {
  let result = 0;
  let calPrice = 0;

  for (let i = 1; i <= count; i++) {
    calPrice = price * i + calPrice;
  }

  result = calPrice - money;
  return result > 0 ? result : 0;
}

function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}
