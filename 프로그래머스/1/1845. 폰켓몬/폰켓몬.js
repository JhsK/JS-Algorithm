function solution(nums) {
    const length = nums.length / 2;
    const list = [...new Set(nums)];

    return list.length < length ? list.length : length;
}