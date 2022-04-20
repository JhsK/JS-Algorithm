function solution(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = arr1[i];
    result.push([]);

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;
      for (let z = 0; z < arr2.length; z++) {
        sum += row[z] * arr2[z][j];
      }
      result[i].push(sum);
      console.log(result);
    }
  }

  return result;
}

// arr1 은 행을 고정시키고 arr2는 열을 고정시켜서 곱셈
