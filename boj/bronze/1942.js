const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// month 지정
const month = input[0];

//day 지정
const day = input[1];

//week 지정
const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// week 중에서 2007년의 요일을 계산하기
console.log(week[new Date(`2007-${month}-${day}`).getDay()]);


// let date = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// const MONTH_30 = [4, 6, 9, 11];
// const MONTH_28 = [2];
// const result = ['SUN', 'MON', 'THE', 'WED', 'THR', 'FRI', 'SAT'];
// let cal = 0;

// if (date[0] !== 1) {
//       for (let i = 1; i < date[0]; i++) {
//           if (MONTH_30.indexOf(i) > -1) {
//               cal += 30
//           } else if (MONTH_28.indexOf(i) > -1) {
//               cal += 28;
//           } else {
//               cal += 31
//           }     
//       }
// }

// console.log(result[(cal + Number(date[1])) % 7]);
