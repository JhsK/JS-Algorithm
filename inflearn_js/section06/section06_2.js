function solution(s) {
  let answer = "";
  let stack = [];

  for (let x of s) {
    if (x === "(") stack.push(x);
    else if (x === ")") stack.pop(x);
    else if (stack.length === 0) answer += x;
  }

  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));

// function solution(s){
//     let answer;
//     let stack=[];
//     for(let x of s){
//         if(x===')'){
//             while(stack.pop()!=='(');
//         }
//         else stack.push(x);
//     }
//     answer=stack.join('');
//     return answer;
// }

// let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));
