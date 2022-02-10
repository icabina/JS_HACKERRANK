const gradingStudents = (grades) => {
  let arr = grades;
  let newGrades = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 33) newGrades.push(arr[i]);
    else if (arr[i] > 33) {
      let string = String(arr[i]);

      let firstNumber = string[0];
      let secondNumber = string[1];

      let firstDigit = Number(firstNumber);
      let secondDigit = Number(secondNumber);
      // console.log(arr[i]);
      // console.log("firstDigit", firstDigit);
      // console.log("secondDigit", secondDigit);
      //=============================
      let multiple; //multiple of 5;
      if (5 < secondDigit && secondDigit <= 9) {
        firstDigit = firstDigit + 1;

        multiple = 0;
      }
      if (1 <= secondDigit && secondDigit < 5) {
        multiple = 5;
      }
      //=============================

      let nextMultiple = String(firstDigit) + String(multiple);
      // console.log("nextMultiple of " + arr[i], nextMultiple);

      //=============================

      let roundGrade = arr[i];
      let calculate = nextMultiple - arr[i];
      // console.log(
      //   calculate +
      //     " is the diff between nextMultiple " +
      //     nextMultiple +
      //     " and original grade " +
      //     arr[i]
      // );
      if (calculate < 3) roundGrade = nextMultiple;
      newGrades.push(Number(roundGrade));
    }
  }
  return newGrades;
};
//TEST
console.log("======================== ");

console.log(gradingStudents([73, 67, 38, 33])); // 75 67 40 33
console.log(
  gradingStudents([
    22, 86, 30, 0, 16, 51, 53, 42, 48, 22, 69, 12, 27, 34, 24, 95, 16, 32, 22,
    52, 35, 93, 99, 87, 88,
  ])
);
