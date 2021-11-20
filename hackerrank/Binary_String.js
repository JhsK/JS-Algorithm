function beautifulBinaryString(b) {
  let answer = 0;
  let paramString = b;

  for (let i = 0; i < b.length; i++) {
    if (paramString.indexOf("010") > -1) {
      let tmp = paramString.indexOf("010");
      paramString = paramString.split("");
      paramString[tmp + 2] = "1";
      paramString = paramString.join("");
      console.log(paramString);
      answer++;
    } else return answer;
  }

  return answer;
}

console.log(beautifulBinaryString("0101010"));
