function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let answer = '';
        let tmp = n - i;
        for (let j = 0; j < n; j++) {
            if (j < tmp) answer += ' ';
            else answer += '#';
        }
        console.log(answer);        
    }
}