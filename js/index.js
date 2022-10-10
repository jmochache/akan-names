const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const weekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getNameAndDay(yearOfBirth, dayOfBirth, monthOfBirth, century, gender) {
  var indexOfTheDay =
    Math.round(
      century / 4 -
        2 * century -
        1 +
        (5 * yearOfBirth) / 4 +
        (26 * (monthOfBirth + 1)) / 10 +
        day
    ) % 7;
  var bornDayUser = weekNames[indexOfTheDay];
  var name = null;

  if (gender === "M") {
    name = maleNames[indexOfTheDay];
  } else if (gender === "F") {
    name = femaleNames[indexOfTheDay];
  } else {
    alert("Invalid input please try again");
  }

  if (month < 1 || month > 12 || month == "") {
    alert("Invalid input, please try again");
  }

  if (day < 1 || day > 31 || day == "") {
    alert("Invalid input, please try again");
  }

  if (year < 1900 || year > 2022 || year == "") {
    alert("Invalid output, please try again");
  }

  var list = [bornDayUser, name];
  return list;
}

