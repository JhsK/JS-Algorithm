function solution(numbers, hand) {
  let pad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let currentLeft = [3, 0];
  let currentRight = [3, 2];
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    let lLocation,
      rLocation = 0;
    let lLength,
      rLength = 0;
    pad.map((inner, left) =>
      inner.map((pad, right) => {
        if (pad === numbers[i]) {
          rLocation = right;
          lLocation = left;
        }
      })
    );

    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      currentLeft = [lLocation, rLocation];
      result += "L";
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      currentRight = [lLocation, rLocation];
      result += "R";
    } else {
      lLength =
        Math.abs(currentLeft[0] - lLocation) +
        Math.abs(currentLeft[1] - rLocation);
      rLength =
        Math.abs(currentRight[0] - lLocation) +
        Math.abs(currentRight[1] - rLocation);

      if (lLength === rLength) {
        if (hand === "left") {
          currentLeft = [lLocation, rLocation];
          result += "L";
        } else {
          currentRight = [lLocation, rLocation];
          result += "R";
        }
      } else if (lLength > rLength) {
        currentRight = [lLocation, rLocation];
        result += "R";
      } else {
        currentLeft = [lLocation, rLocation];
        result += "L";
      }
    }
  }

  return result;
}
