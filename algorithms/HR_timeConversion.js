const timeConversion = (s) => {
  const temp = Array.from(s);
  const time = temp.slice(0, 8);
  const allowed = new Set();
  allowed.add(0);
  allowed.add(1);
  allowed.add(2);
  allowed.add(3);
  allowed.add(4);
  allowed.add(5);
  allowed.add(6);
  allowed.add(7);
  allowed.add(8);
  allowed.add(9);

  const digit_0 = Number(time[0]);
  const digit_1 = Number(time[1]);
  const digit_3 = Number(time[3]);
  const digit_4 = Number(time[4]);
  const digit_6 = Number(time[6]);
  const digit_7 = Number(time[7]);

  if (!allowed.has(digit_0)) return "Please enter a valid time format";
  if (!allowed.has(digit_1)) return "Please enter a valid time format";
  if (!allowed.has(digit_3)) return "Please enter a valid time format";
  if (!allowed.has(digit_4)) return "Please enter a valid time format";
  if (!allowed.has(digit_6)) return "Please enter a valid time format";
  if (!allowed.has(digit_7)) return "Please enter a valid time format";

  if (time[2] !== ":" || time[5] !== ":") return "Lacking separators ':'";

  if (s.length !== 10) return "Error: expect 10 chars";

  let hourArr = time.slice(0, 2);
  let hour = Number(hourArr.join(""));
  if (hour > 24) return "the hour is wrong";

  // ===================================
  const remainTime = time.slice(2);
  let newTime = [];
  // ===================================
  if (s.endsWith("PM")) {
    if (hour > 12) {
      return "Time is already in 24 hour format";
    } else if (hour < 12) {
      hour = hour + 12;
    }

    if (hour === 24) hour = "0";
  }
  if (s.endsWith("AM")) {
    if (hour > 12) return "AM hours run up to 12";

    if (hour === 12) {
      hour = "0";
    }
  }
  if (hour < 10) {
    newTime = [0, hour, ...remainTime];
  } else {
    newTime = [hour, ...remainTime];
  }
  return newTime.join("");
};
//TEST
console.log("======================== ");
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("19:05:45PM"));
console.log(timeConversion("19:05:45AM"));
console.log(timeConversion("24:05:45AM"));
console.log(timeConversion("24:05:45PM")); //ERROR
console.log(timeConversion("12:40:22PM")); //00:40:22
console.log(timeConversion("12:40:22AM")); //00:40:22
console.log(timeConversion("06:40:03AM")); //06:40:03
console.log(timeConversion("12:45:54PM")); //12:45:54
