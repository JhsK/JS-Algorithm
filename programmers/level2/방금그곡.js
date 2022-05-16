function solution(m, musicinfos) {
  let stack = [];
  let result;
  let M = m.replace(/(\D)#/g, (s, p1) => p1.toLowerCase());

  for (let i = 0; i < musicinfos.length; i++) {
    let musicinfosArr = musicinfos[i].split(",");
    let hour =
      Number(musicinfosArr[1].slice(0, 2)) -
      Number(musicinfosArr[0].slice(0, 2));
    let minute =
      Number(musicinfosArr[1].slice(3)) - Number(musicinfosArr[0].slice(3));
    let runTime = 60 * hour + minute;
    let cal = Math.floor(runTime / musicinfosArr[3].length);
    let runTimeMusic = "";

    if (cal === 0) runTimeMusic = musicinfosArr[3];
    else runTimeMusic = musicinfosArr[3].repeat(cal);
    runTimeMusic = runTimeMusic.replace(/(\D)#/g, (s, p1) => p1.toLowerCase());

    if (runTimeMusic.indexOf(M) !== -1) stack.push([musicinfosArr[2], runTime]);
  }

  if (stack.length === 1) return stack[0][0];
  else if (stack.length === 0) return "(None)";

  result = stack.sort((a, b) => {
    if (a[1] === b[1]) return 0;
    return b[1] - a[1];
  });

  return result[0][0];
}

console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
);
