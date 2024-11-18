function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i+= 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function solution(n, k) {
    let result = 0;
    const transferK = n.toString(k).split('0');
    
    for (const prime of transferK) {
        if (isPrime(Number(prime))) result++;
    }
    
    return result;
}