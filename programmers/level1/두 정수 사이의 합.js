function adder(a, b) {
  var result = 0;

  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

// https://angelinajelly2020.tistory.com/66

function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
