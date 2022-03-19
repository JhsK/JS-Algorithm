const waterMelon = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};

const waterMelon2 = (n) => "수박".repeat(n).slice(0, n);
