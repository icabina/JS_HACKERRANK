function queensAttack(n, k, r_q, c_q, obstacles) {
  //constrains
  if (n < 0 || n > 1000000) return;
  if (k < 0 || k > 1000000) return;

  let rows = n;
  let columns = n;

  let obstaculos = obstacles;

  const queenStart = [];
  queenStart.push(r_q);
  queenStart.push(c_q);

  const obs = new Object();
  if (k > 0) {
    for (let i = 0; i < obstaculos.length; i++) {
      let o = String(obstaculos[i]);
      obs[o] = i;
    }
  }

  let steps = 0;
  let sq_N = 0;
  let sq_S = 0;
  let sq_E = 0;
  let sq_W = 0;
  let sq_NE = 0;
  let sq_SE = 0;
  let sq_SW = 0;
  let sq_NW = 0;
  //===============================
  // MOVE QUEEN
  //===============================
  let queenPosition;

  function check(queenPosition) {
    let strQueenPos = String(queenPosition);
    if (strQueenPos in obs) return true;
  }

  function setQueenInitialPosition() {
    queenPosition = [];
    queenPosition.push(...queenStart);
  }
  //===============================
  //N
  setQueenInitialPosition();
  if (queenPosition[0] !== rows)
    do {
      queenPosition[0] = queenPosition[0] + 1;
      if (check(queenPosition)) break;
      sq_N = sq_N + 1;
      steps = steps + 1;
      //   console.log("N", sq_N);
      //   console.log("queenPosition", String(queenPosition));
    } while (queenPosition[0] < rows);

  //===============================
  //S
  setQueenInitialPosition();
  if (queenPosition[0] !== 1)
    do {
      queenPosition[0] = queenPosition[0] - 1;
      if (check(queenPosition)) break;
      sq_S = sq_S + 1;
      steps = steps + 1;
      //   console.log("S", sq_S);
      //   console.log("queenPosition", queenPosition);
    } while (queenPosition[0] > 1);
  //===============================
  //E
  setQueenInitialPosition();
  if (queenPosition[1] !== columns)
    do {
      queenPosition[1] = queenPosition[1] + 1;
      if (check(queenPosition)) break;
      sq_E = sq_E + 1;
      steps = steps + 1;
      //   console.log("E", sq_E);
      //   console.log("queenPosition", queenPosition);
    } while (queenPosition[1] < columns);
  //===============================
  //W
  setQueenInitialPosition();
  if (queenPosition[1] !== 1)
    do {
      queenPosition[1] = queenPosition[1] - 1;
      if (check(queenPosition)) break;
      sq_W = sq_W + 1;
      steps = steps + 1;
      //   console.log("W", sq_W);
      //   console.log("queenPosition", queenPosition);
    } while (queenPosition[1] > 1);
  //===============================
  //NW
  setQueenInitialPosition();
  if (queenPosition[0] !== rows && queenPosition[1] !== 1)
    do {
      queenPosition[0] = queenPosition[0] + 1;
      queenPosition[1] = queenPosition[1] - 1;
      if (check(queenPosition)) break;
      sq_NW = sq_NW + 1;
      steps = steps + 1;
      //   console.log("NW", sq_NW);
      //   console.log("queenPosition", queenPosition);
    } while (queenPosition[1] > 1 && queenPosition[0] < rows);
  //===============================
  //NE
  setQueenInitialPosition();
  if (queenPosition[0] !== rows && queenPosition[1] !== columns)
    do {
      queenPosition[0] = queenPosition[0] + 1;
      queenPosition[1] = queenPosition[1] + 1;
      if (check(queenPosition)) break;
      sq_NE = sq_NE + 1;
      steps = steps + 1;
      /*  console.log("NE", sq_NE);
      console.log("queenPosition", queenPosition); */
    } while (queenPosition[0] < rows && queenPosition[1] < columns);
  //===============================
  //SW
  setQueenInitialPosition();
  if (queenPosition[0] !== 1 && queenPosition[1] !== 1)
    do {
      queenPosition[0] = queenPosition[0] - 1;
      queenPosition[1] = queenPosition[1] - 1;
      if (check(queenPosition)) break;
      sq_SW = sq_SW + 1;
      steps = steps + 1;
      //   console.log("SW", sq_SW);
      //   console.log("queenPosition", queenPosition);
    } while (queenPosition[1] > 1 && queenPosition[0] > 1);
  //===============================
  //SE
  setQueenInitialPosition();
  if (queenPosition[0] !== 1 && queenPosition[1] !== columns)
    do {
      queenPosition[0] = queenPosition[0] - 1;
      queenPosition[1] = queenPosition[1] + 1;
      if (check(queenPosition)) break;
      sq_SE = sq_SE + 1;
      steps = steps + 1;
      //   console.log("SE", sq_SE);
      //   console.log("queenPosition", queenPosition);
    } while (
      queenPosition[0] > 1 &&
      queenPosition[1] > 1 &&
      queenPosition[1] < columns
    );
  //===============================
  //console.log(steps);
  //===============================
  return steps;
}
//TEST
console.log("======================== ");

/* console.log(
  queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
  ]) // 10
); */
//console.log(queensAttack(4, 0, 4, 4)); // 9
console.log(queensAttack(8, 0, 5, 4)); // 27

/* 
//===============================

Sample Input 1

5 3 //number of rows and cols
4 3 //queens position
5 5 //obstacle
4 2 //obstacle
2 3 //obstacle
Sample Output 1

10
Explanation 1

The queen is standing at position  on a  chessboard with  obstacles:
//===============================


Given the queen's position and the locations of all the obstacles, find and print the number of squares the queen can attack from her position at . In the board above, there are  such squares.

Function Description

Complete the queensAttack function in the editor below.

queensAttack has the following parameters:
- int n: the number of rows and columns in the board
- nt k: the number of obstacles on the board
- int r_q: the row number of the queen's position
- int c_q: the column number of the queen's position
- int obstacles[k][2]: each element is an array of  integers, the row and column of an obstacle

Returns
- int: the number of squares the queen can attack

Input Format

The first line contains two space-separated integers  and , the length of the board's sides and the number of obstacles.
The next line contains two space-separated integers  and , the queen's row and column position.
Each of the next  lines contains two space-separated integers  and , the row and column position of .

Constraints

A single cell may contain more than one obstacle.
There will never be an obstacle at the position where the queen is located.
Subtasks

For  of the maximum score:

For  of the maximum score:

Sample Input 0

4 0
4 4
Sample Output 0

9 


//===============================

Sample Input 1

5 3 //number of rows and cols
4 3 //queens position
5 5 //obstacle
4 2 //obstacle
2 3 //obstacle
Sample Output 1

10
Explanation 1

The queen is standing at position  on a  chessboard with  obstacles:
//===============================
*/
