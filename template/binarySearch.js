function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

for (let i = 0; i < m; i++) {
  let rightIndex = upperBound(list, haveCard[i], 0, list.length);
  let leftIndex = lowerBound(list, haveCard[i], 0, list.length);

  result.push(rightIndex - leftIndex);
}
