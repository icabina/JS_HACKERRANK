// countApplesAndOranges has the following parameter(s):

// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// Input Format

// The first line contains two space-separated integers denoting the respective values of  and .
// The second line contains two space-separated integers denoting the respective values of  and .
// The third line contains two space-separated integers denoting the respective values of  and .
// The fourth line contains  space-separated integers denoting the respective distances that each apple falls from point .
// The fifth line contains  space-separated integers denoting the respective distances that each orange falls from point .

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //   const houseleft = s;
  //   const houseright = t;
  const apples_distances = apples;
  const orange_distances = oranges;
  const m = apples_distances.length;
  const n = orange_distances.length;
  let apples_landing = [];
  let oranges_landing = [];
  let countApple = 0;
  let countOrange = 0;

  if (s < 1 || t < 1 || a < 1 || b < 1 || m < 1 || n < 1) return;
  if (
    s > 1000000 ||
    t > 1000000 ||
    a > 1000000 ||
    b > 1000000 ||
    m > 1000000 ||
    n > 1000000
  )
    return;

  if (a >= s || s >= t || t >= b) return;

  for (let i of apples_distances) {
    if (i < -1000000 || i > 1000000) return;
    let suma = a + i;
    apples_landing.push(suma);
  }
  for (let i of orange_distances) {
    if (i < -1000000 || i > 1000000) return;
    let suma = b + i;
    oranges_landing.push(suma);
  }

  //   console.log("apples_landing", apples_landing);
  //   console.log("oranges_landing", oranges_landing);

  for (let i of apples_landing) {
    if (i >= s && i <= t) countApple++;
  }
  for (let i of oranges_landing) {
    if (i >= s && i <= t) countOrange++;
  }
  console.log(countApple);
  console.log(countOrange);
  return;
}
//TEST
console.log("======================== ");

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])); //
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 3], [5, -6])); //
