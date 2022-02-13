function codeSignal(numbers, left, right) {
  console.log(numbers);
  if (1 > left || left > 100000) return;
  if (1 > right || right > 100000) return;
  if (1 > numbers.length || numbers.length > 100) return;

  let range = new Set();
  let newArray = [];
  let x = 0;
  for (let i = left; i <= right; i++) {
    range.add(i);
  }

  for (let i = 0; i < numbers.length; i++) {
    let posicion = i + 1;
    let valor = numbers[i];
    if (1 > valor || valor > 10000000) return;

    let isDivisible = (valor, posicion) => {
      x = valor / posicion;
      //   console.log("x", x);
      if (range.has(x)) {
        newArray.push(true);
      } else {
        newArray.push(false);
      }
    };

    isDivisible(valor, posicion);
  }

  return newArray;
}
//TEST
console.log("======================== ");

console.log(codeSignal([8, 5, 6, 16, 5], 1, 3)); // [false false true false true]
console.log(codeSignal([100], 1, 1000)); // [true]
/* 
Example

For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].

For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer numbers

An array of integers.

Guaranteed constraints:
1 ≤ numbers.length ≤ 100,
1 ≤ numbers[i] ≤ 106.

[input] integer left

An integer representing the lower bound for x.

Guaranteed constraints:
1 ≤ left ≤ 10^4.

[input] integer right

An integer representing the upper bound for x.

Guaranteed constraints:
1 ≤ left ≤ right ≤ 10^4.

[output] array.boolean

A boolean array result described above. */
