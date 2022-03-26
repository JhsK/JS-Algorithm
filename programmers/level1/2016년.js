function solution(a, b) {
  const arrayDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var answer = "";
  const inputDay = new Date(`2016/${a}/${b}`);
  const day = inputDay.getDay();
  answer = arrayDay[day];

  return answer;
}
