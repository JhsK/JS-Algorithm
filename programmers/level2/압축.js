function solution(msg) {
  let result = [];
  let dictionary = Array.from({ length: 27 }, (v, i) =>
    String.fromCharCode(i + 64)
  );

  for (let i = 0; i < msg.length; i++) {
    let ingChar = "";
    let j = 1;

    while (
      dictionary.indexOf(msg.slice(i, i + j)) !== -1 &&
      i + j <= msg.length
    ) {
      j++;
    }

    result.push(dictionary.indexOf(msg.slice(i, i + j - 1)));
    dictionary.push(msg.slice(i, i + j));

    i += j - 2;
  }

  return result;
}
