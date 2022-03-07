// let durability = [1, 2, 1, 4];
// let dock = [
//   {
//     이름: "루비독",
//     나이: "95년생",
//     점프력: "3",
//     몸무게: "4",
//   },
//   {
//     이름: "피치독",
//     나이: "95년생",
//     점프력: "3",
//     몸무게: "3",
//   },
//   {
//     이름: "씨-독",
//     나이: "72년생",
//     점프력: "2",
//     몸무게: "1",
//   },
//   {
//     이름: "코볼독",
//     나이: "59년생",
//     점프력: "1",
//     몸무게: "1",
//   },
// ];

let durability = [5, 3, 4, 1, 3, 8, 3];
let dock = [
  {
    이름: "루비독",
    나이: "95년생",
    점프력: "3",
    몸무게: "4",
  },
  {
    이름: "피치독",
    나이: "95년생",
    점프력: "3",
    몸무게: "3",
  },
  {
    이름: "씨-독",
    나이: "72년생",
    점프력: "2",
    몸무게: "1",
  },
  {
    이름: "코볼독",
    나이: "59년생",
    점프력: "1",
    몸무게: "1",
  },
];

function SuccessDock(durability, dock) {
  let answer = [];
  for (let x of dock) {
    let jumpResult = durability[x.점프력 - 1] - x.몸무게;
    durability[x.점프력 - 1] = jumpResult;
    if (jumpResult >= 0) answer.push(x.이름);
  }

  return answer;
}

console.log(SuccessDock(durability, dock));
