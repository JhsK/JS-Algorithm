function solution(participant, completion) {
  let run = new Map();

  for (let runner of participant) {
    if (run.has(runner)) {
      run.set(runner, run.get(runner) + 1);
    } else run.set(runner, 1);
  }

  for (let endRunner of completion) {
    run.set(endRunner, run.get(endRunner) - 1);
  }

  for (let success of run.keys()) {
    if (run.get(success) >= 1) return success;
  }
}

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
