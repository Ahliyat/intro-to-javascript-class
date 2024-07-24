let userName = "";

userName ? console.log(`Hello ${userName}`) : console.log("Hello");

const userQuestion = "What is ES6?";

userName
  ? console.log(`${userName} asked: ${userQuestion}`)
  : console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall =
      "ES6 refers to version 6 of the ECMA Script programming language";

    break;
  case 1:
    eightBall = "It makes large-scale software development easier";
    break;
  case 2:
    eightBall = "ECMA Script is the standardized name for JS";
    break;
  case 3:
    eightBall = "Major enhancement to the JS language";
    break;
  case 4:
    eightBall = "Version 6 is the next version after version 5";
    break;
  case 5:
    eightBall = "A transpiler to convert ES6 code into ES5";
    break;
  case 6:
    eightBall = "And it adds many more features";
    break;
  case 7:
    eightBall = "ES6 was published in June 2015";
    break;

  default:
    eightBall = "Could not find the definition";
    break;
}

console.log(`The eight ball answered: ${eightBall}`);

let eightBall2 = "";

if (randomNumber) {
  0
  eightBall = "It makes large-scale software development easier";
} else if (randomNumber)  {
  1
  eightBall = "ES6 refers to version 6 of the ECMA Script programming language";
} else if (randomNumber) {
  2
  eightBall = "ECMA Script is the standardized name for JS";
} else if (randomNumber) {
  3
  eightBall = "Major enhancement to the JS language";
} else if (randomNumber) {
  4
  eightBall = "Version 6 is the next version after version 5";
} else if (randomNumber) {
  5
  eightBall = "A transpiler to convert ES6 code into ES5";
} else if (randomNumber) {
  6
  eightBall = "And it adds many more features";
} else if (randomNumber) {
  7
  eightBall = "ES6 was published in June 2015";
} else {
  console.log("Definition not found");
}

console.log(`The eight ball answered: ${eightBall}`);
