function camelcase(s) {
    let answer = 1;
    for (let i = 2; i < s.length; i++) {
      if (s[i].charCodeAt() === s[i].toUpperCase().charCodeAt()) answer++;  
    }

    return answer;
}