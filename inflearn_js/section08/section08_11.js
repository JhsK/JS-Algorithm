function solution(n){         
    let answer;

    function DFS(n) {
        if (n === 1) return 1;
        return n*DFS(n-1);
    }

    answer=DFS(n);
    
    return answer;
}

console.log(solution(5));


// function solution(n){         
//     let answer = 0;
//     let tmp = Array.from({length: n}, (_, i) => i + 1)
//     tmp.reverse();

//     function DFS(v, s) {
//         if (v === n) {
//             answer = s;
//             return;
//         } else {
//             // for (let i = 1; i < n; i++) {
//             //     DFS(v+1, s * tmp[i]);
//             // }
//             DFS(v+1, s * tmp[v]);
//         }
//     }

//     DFS(0, 1);
    
//     return answer;
// }

// console.log(solution(5));