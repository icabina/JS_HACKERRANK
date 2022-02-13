function gorilla(a, b) {
  let x = a;
  let y = b;

  do {
    if (x > y) x = x - y;
    if (y > x) y = y - x;
  } while (x !== y);

  return x || y;
}
//TEST
console.log("======================== ");

console.log(gorilla(2437, 875)); //
