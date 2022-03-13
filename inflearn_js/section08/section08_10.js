function solution(m, arr){         
    let answer=[];
    let tmp = Array.from({length: m}, () => 0);
    let check = Array.from({length: arr.length}, () => 0);

    function DFS(v) {
        if (v === m) {
            answer.push(tmp.slice());
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (check[i] === 0) {
                    check[i] = 1;
                    tmp[v] = arr[i];
                    DFS(v+1);
                    check[i] = 0;
                }
                
            }
        }
    }
    DFS(0);
    return answer;
}

let arr=[3, 6, 9];
console.log(solution(2, arr));