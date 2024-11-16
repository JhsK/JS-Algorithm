function solution(numbers) {
    const nums = Array.from({ length: 10 }, (_, i) => i);
    const result = nums.filter((num) => !numbers.includes(num));

    return result.reduce((a, b) => a + b);
}