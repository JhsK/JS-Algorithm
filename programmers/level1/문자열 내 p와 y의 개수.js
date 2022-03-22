function solution(s) {
  let cntY = 0;
  let cntP = 0;

  if (
    s.indexOf("p") === -1 &&
    s.indexOf("P") === -1 &&
    s.indexOf("y") === -1 &&
    s.indexOf("Y") === -1
  )
    return true;

  for (let i of s) {
    if (i === "p" || i === "P") cntP++;
    else if (i === "y" || i === "Y") cntY++;
  }

  return cntY === cntP ? true : false;
}

function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
