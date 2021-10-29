function plusMinus(arr) {
    let x = 0;
    let y = 0;
    let z = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) x++;
        if (arr[i] < 0) y++;
        if (arr[i] === 0) z++;
    }
    x = x / n;
    y = y / n;
    z = z / n;
    
    console.log(x);
    console.log(y);
    console.log(z);
}