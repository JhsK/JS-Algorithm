function solution(phone_number) {
  let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
