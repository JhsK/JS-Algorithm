function solution(new_id) {
  let result = new_id
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "");

  if (result === "") result = "a";
  if (result.length >= 16) {
    result = result.slice(0, 15);
    if (result[result.length - 1] === ".") result = result.replace(/\.$/, "");
    //   result = result.replace(result[result.length - 1], "");
  }
  if (result.length <= 2) {
    while (result.length < 3) {
      result += result[result.length - 1];
    }
  }

  return result;
}

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
