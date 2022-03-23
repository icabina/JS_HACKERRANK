function find_max(nums) {
  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
  for (let num of nums) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}

//TEST
console.log("======================== ");

console.log(gorilla([, 14, 67, 87, 23, 109])); //
