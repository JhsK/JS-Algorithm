function solution(skill, skill_trees) {
  let result = 0;
  let skillArr = skill.split("");

  for (let i = 0; i < skill_trees.length; i++) {
    let notSequence = false;
    let tmp = skill_trees[i]
      .split("")
      .filter((isSkill) => skillArr.indexOf(isSkill) !== -1);

    for (let j = 0; j < tmp.length; j++) {
      if (skillArr[j] !== tmp[j]) {
        notSequence = true;
        break;
      }
    }

    if (!notSequence) result++;
    else notSequence = false;
  }

  return result;
}

console.log(
  solution("CBDK", [
    "CB",
    "CXYB",
    "BD",
    "AECD",
    "ABC",
    "AEX",
    "CDB",
    "CBKD",
    "IJCB",
    "LMDK",
  ])
);
