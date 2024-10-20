function solution(numbers) {
    numbers.sort((a, b) => {
        const strA = String(a) + String(b);
        const strB = String(b) + String(a);
        
        return strA > strB ? -1 : 1;
    });
    
    const result = numbers.join('');
    return Number(result) === 0 ? '0' : result;
}
                 
                 
                 