function marsExploration(s) {
    let j = 0;
    let answer = 0;
    let tmp = ["S", "O", "S"];
    for (let i = 0; i < s.length; i++) {
        if (j > 2) j = 0;
        if (s[i] != tmp[j]) answer++
        j++;
    }
    return answer;
}