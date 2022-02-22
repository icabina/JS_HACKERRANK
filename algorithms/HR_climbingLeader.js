function climbingLeaderboard(n, ranked, m, player) {
  // Write your code here
  const set = new Set(ranked);
  const rank = [];
  let inRank = false;
  let newRank = [];
  let thePosition = 0;
  let counter = 1;

  for (let i of set.keys()) {
    rank[counter] = i;
    counter += 1;
  }
  // console.log(rank);

  // "1": 100,
  // "2": 50,
  // "3": 40,
  // "4": 20,
  // "5": 10

  //for each player(n) * rank(m)

  for (let i = 0; i < player.length; i++) {
    // Object.entries(rank).forEach(([key, value]) => {
    for (let j = 0; j < rank.length; j++) {
      if (player[i] >= rank[j]) {
        // console.log("si " + j);
        inRank = true;
        thePosition = j;
        break;
      } /*  else if (player[i] === value) {
        console.log("igual");
        inRank = true;
        theKey = key;
      }  */ else {
        // console.log("no");
        inRank = false;
      }
    }
    if (!inRank) {
      rank[counter] = player[i];
      newRank.push(counter);
      counter += 1;
    } else {
      newRank.push(thePosition);
    }
  }
  console.log(newRank);
  return;
}

//TEST
console.log("======================== ");

console.log(
  climbingLeaderboard(7, [100, 100, 50, 40, 40, 20, 10], 4, [5, 25, 50, 120])
); // 6 4 2 1
