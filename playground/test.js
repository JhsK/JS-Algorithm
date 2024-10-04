function find(parents, x) {
  if (parents[x] === x) {
    return x;
  }

  parents[x] = find(parents, parents[x]);
  return parents[x];
}

function union(parents, x, y) {
  const rootArr1 = find(parents, x);
  const rootArr2 = find(parents, y);

  parents[rootArr2] = rootArr1;
}

function solution(options) {
  const k = options.length;
  const parents = Array.from({ length: k }, (_, i) => i);
}

console.log(
  solution([
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ])
);
