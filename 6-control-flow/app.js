// if keyword
// else keyword
//else if
// switch
// tenary operators

// if keyword
let today = "Tuesday";
if (today) {
  console.log("Today is tuesday");
}

if (today) console.log("Today is tuesday");

// else keyword
let isRaining = true;
if (isRaining) {
  console.log("Stay at home and relax");
} else {
  console.log("Go outside");
}

//else if keyword
let haveComputer = true;
let noComputer = false;
if (haveComputer) {
  console.log("Learn programming");
} else if (noComputer) {
  console.log("play games");
}

//another example

let isAdmin = true;
let isAuthenticated = true;
if (isAdmin && isAuthenticated) {
  console.log("Admin succesfully loggedIn and redirected to dashboard page");
} else if (isAdmin && !isAuthenticated) {
  console.log("Admin login failed, kindly supply correct credentials");
} else {
  console.log("Something went wrong");
}

let spaghettiAvailable = true;
let miloAvailable = true;
if (spaghettiAvailable && miloAvailable) {
  console.log("Sell to customer");
} else if (!spaghettiAvailable && miloAvailable) {
  console.log("One not available");
} else {
  console.log("none available");
}

// switch keyword
let generateRandomNumberBtwZeroandTen = Math.random() * 10;
// console.log(generateRandomNumberBtwZeroandTen);
let convertToWholeNumber = Math.floor(generateRandomNumberBtwZeroandTen) + 1;
console.log("Current Random Number", convertToWholeNumber);

switch (convertToWholeNumber) {
  case 0:
    console.log("Zero is the current random number");
    break;
  case 1:
    console.log("One is the current random number");
    break;
  case 2:
    console.log("Two is the current random number");
    break;
  case 3:
    console.log("Three is the current random number");
    break;
  case 4:
    console.log("Four is the current random number");
    break;
  case 5:
    console.log("Five is the current random number");
    break;
  case 6:
    console.log("Six is the current random number");
    break;
  case 7:
    console.log("Seven is the current random number");
    break;
  case 8:
    console.log("Eigth is the current random number");
    break;
  case 9:
    console.log("Nine is the current random number");
    break;
  case 10:
    console.log("Ten is the current random number");
    break;
  case 11:
    console.log("Eleven is the current random number");
    break;

  default:
    console.log("This random number is not available");
    break;
}
/**
 * tenary operators
 * condition ? "do something " : "do another thing"
 */

//

let classIsEnding = true;
classIsEnding
  ? console.log("We are done with todays class")
  : console.log("Class continue");
