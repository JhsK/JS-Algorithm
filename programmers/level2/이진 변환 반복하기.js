function solution(s) {
  let tryTransfer = 0;
  let removeZero = 0;

  while (s !== "1") {
    tryTransfer++;
    let replaceStr = s.replace(/0+/g, "");
    removeZero += s.length - replaceStr.length;
    s = replaceStr.length.toString(2);
  }

  return [tryTransfer, removeZero];
}
