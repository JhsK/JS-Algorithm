function solution(cacheSize, cities) {
  const citiesArr = cities.map((city) => city.toUpperCase());
  const queue = [];
  let time = 0;

  if (cacheSize === 0) {
    return (time = citiesArr.length * 5);
  }

  for (let i = 0; i < citiesArr.length; i++) {
    if (queue.includes(citiesArr[i])) {
      queue.splice(queue.indexOf(citiesArr[i]), 1);
      queue.push(citiesArr[i]);
      time++;
    } else {
      if (queue.length === cacheSize) queue.shift();
      queue.push(citiesArr[i]);
      time += 5;
    }
  }

  return time;
}
