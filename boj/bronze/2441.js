let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = Number(input[0]);
let result = '';

for (let i = count; i > 0; i--) {
    for (let z = 0; z < count - i; z++) {
            result += ' ';
    }
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    console.log(result);
    result = '';
}