// if keyword
let myName = "Ahliyat";
if (myName) {
  console.log("Hi, Ahliyat");
}

// else keyword
let theName = false;
if (theName) {
  console.log("Hello, Ahliyat");
} else {
  console.log("Error!! Unknown Personnel");
}

//else if keyword
let indomietableAvailable = true;
let mimeeAvailable = true;
if (mimeeAvailable && indomietableAvailable) {
  console.log("Sell to customer");
} else if (!mimeeAvailable && indomietableAvailable) {
  console.log("One not available");
} else {
  console.log("none available");
}

// switch keyword
let decimalNumbers = Math.random() * 20;
// console.log(generateRandomNumberBtwZeroandTen);
let convertToWholeNumber = Math.floor(decimalNumbers) + 1;
console.log(convertToWholeNumber);

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
  case 12:
    console.log("Twelve is the current random number");
    break;
  case 13:
    console.log("Thirteen is the current random number");
    break;
  case 14:
    console.log("Fourteen is the current random number");
    break;
  case 15:
    console.log("Fifteen is the current random number");
    break;
  case 16:
    console.log("Sixteen is the current random number");
    break;
  case 17:
    console.log("Seventeen is the current random number");
    break;
  case 18:
    console.log("Eighteen is the current random number");
    break;
  case 19:
    console.log("Nineteen is the current random number");
    break;
  case 20:
    console.log("Twenty is the current random number");
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

let iAmASoftwareDeveloper = true;
iAmASoftwareDeveloper
  ? console.log("i'm a Frontend Developer ")
  : console.log("I am a Gamer");
