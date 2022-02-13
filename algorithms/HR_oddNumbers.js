function oddNumbers(l, r) {
  if (1 > l || l > r || r > 1000000) return;

  let left = l;
  let container = [];
  const isOdd = (num) => num % 2 !== 0;

  do {
    if (isOdd(left)) {
      container.push(left);
    }
    left = left + 1;
  } while (left <= r);

  console.log(container);
  return container;
}
//TEST
console.log("======================== ");

console.log(oddNumbers(7, 15)); //
