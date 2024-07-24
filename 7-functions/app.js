/**
 * Function in JS
 * Function is  apiece of reuseable code for performing a specific task
 */

/**
 * How to declare a function
 * function declaration
 * function expression
 * arrow function
 * anonymous function
 *
 */
function name(params) {
  // function body/logic
}

// Storing a function inside a variable is called function expression
//illustration
let greetVisitor = function (params) {
  // function body/logic
};

//Arrow function
let sayHello = (params) => {};
//Anonymous function

/**
 * How to call a function
 * nameOfTheFunction()
 * nameOfTheFunction(argument)
 *
 */

function addition(x, y) {
  return x + y;
}

let addNum = addition(4, 7);
console.log(addNum);

function subtraction(p, q) {
  return p - q;
}

let subNum = subtraction(17, 7);
console.log(subNum);

function multiplication(a, b) {
  return a * b;
}

let multiplyNum = multiplication(6, 8);
console.log(multiplyNum);

function division(s, t) {
  return s / t;
}

let divideNum = division(49, 7);
console.log(divideNum);

//Another example
function welcomeUser(user) {
  return
}

//Function expression example

let timeToEat = function(breakfastTime, lunchTime, dinnerTime) {
  let time = new Date().toLocaleTimeString()
  console.log(time);
  if (breakfastTime === time) {
    return "Time to eat breakfast"
  }
  else if (lunchTime === time) {
    return "Time to eat lunch";
  }
   else if (dinnerTime === time) {
    return "Time to eat dinner";
   }
   else{
return "You can decide when to eat"
   }
}

console.log(timeToEat(7, 1, 6));


