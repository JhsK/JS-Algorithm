function test(arr, i, j) {
    let s = []; // 합 배열
    s[0] = arr[0];

    for (let x = 1; x < arr.length; x++) {
        s[x] = s[x-1] + arr[x];
    }
    return s[j] + s[i-1];
}

console.log(test([5,4,3,2,1], 1, 3));