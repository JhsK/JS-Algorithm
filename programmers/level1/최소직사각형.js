function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (maxWidth < Math.max(...sizes[i])) maxWidth = Math.max(...sizes[i]);
    if (maxHeight < Math.min(...sizes[i])) maxHeight = Math.min(...sizes[i]);
  }

  return maxWidth * maxHeight;
}
