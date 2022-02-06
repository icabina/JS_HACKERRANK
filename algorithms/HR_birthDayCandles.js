const birthdayCakeCandles = (candles) => {
  const n = candles.length;
  if (1 > n || n > 1000000) return;

  const max = Math.max(...candles);
  const amount = candles.filter((c) => c === max);
  return amount.length;
};
//TEST
console.log("============================================ ");
console.log(birthdayCakeCandles([3, 2, 1, 3]));
