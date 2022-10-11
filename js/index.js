// Mochache akan code

function getAkanName () {
  var birthYear = document.getElementById("year-input").value;
  var birthMonth = Number(document.getElementById("month-input").value);
  var birthDay = Number(document.getElementById("day-input").value);
  var genders = document.getElementsByName("gender");

  // function to get gender
  function getGender () {
    for (var gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  var selectedGender = getGender();
  console.log(selectedGender);

  // validation functions
  function monthIsValidator () {
    if (birthMonth < 1 || birthMonth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayIsValidator () {
    if (birthMonth === 2 && Number(birthYear)%4 === 0) {
      if (birthDay > 28 || birthDay < 1) {
        return false;
      } else if (birthMonth === 2 && birthDay > 29) {
        return false;
      } else if (birthMonth === 2 && birthDay < 1) {
        return false;
      } else {
        return true;
      }
    } else if (birthDay < 1 || birthDay > 31){
      return false;
    } else {
      return true;
    }
  }

  //validation variables
  var monthIsValid = monthIsValidator();
  var dayIsValid = dayIsValidator();

  //formula to get day of birth indes (Sunday = 1, Monday = 2)etc..
  var weekDaysIndex = Math.floor((((Number(birthYear.slice(0,2))/4)-2*Number(birthYear.slice(0,2))-1)+
          ((5*Number(birthYear.slice(2,4))/4))+((26*(birthMonth+1)/10))+birthDay)%7);

  //constants as provided
  var weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  var maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  var femaleNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];

  //generating index value to select items on arrays
  var index;
  // fix formula bug
  if (weekDaysIndex == 0){
    index = 6;
  } else {
    index = weekDaysIndex - 1;
  }

  console.log(index);

  if (selectedGender == "male" && monthIsValid && dayIsValid) {
    document.getElementById('result').textContent = "You were born on a " + weekDays[index] + " , your Akan name is " + maleNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + maleNames[index];
    return false;
  } else if (selectedGender == "female" && monthIsValid && dayIsValid) {
    document.getElementById('result').textContent = "You were born on a " + weekDays[index] + " , your Akan name is " + femaleNames[index];
    document.getElementById('display-name').textContent = "Here is your Akan name: ";
    document.getElementById('result').style.fontSize = "18px";
    document.querySelector('h1').textContent = "Hello" + " " + femaleNames[index];
    return false;
  } else {
    alert("Invalid entry, try again");
  }
}