const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let answer = '';
    for (let i = 1; i <= input; i++) {
        answer += i + '\n';
    }
    
    console.log(answer);

    process.exit();
});