function stringConstruction(s) {
  const slen = s ? s.length : 0;
  if (slen < 1 || slen > 100000) {
    return 0;
  }

  let p = [];
  return s.split("").filter((el, i) => {
    if (p.indexOf(el) < 0) {
      p.push(el);
      return el;
    }
  }).length;
}
