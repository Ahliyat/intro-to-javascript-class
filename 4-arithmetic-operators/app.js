//Arithmetic Operator

/**
 * Addition Operator (+)
 * Subtraction Operator (-)
 * Multiplication Operator (*)
 * Division Operator (/)
 * Modulo Operator (%)
 * Assignment Operator (=)
 * Equality Operator (==)
 * Stict Equality Operator (===)
 * Negation Equality (!)
 */

console.log(2 + 5); // 7
console.log(2 - 5); // -3
console.log(2 * 5); // 10
console.log(8 / 4); // 2
console.log(8 % 3); // 2

let myFavoriteFruit = "Banana"; //assigning variable

let myFavoriteStadium = "Anfield";
let myOtherFavoriteStadium = "Villa Park";

console.log(
  "Testing equality Operator",
  myFavoriteStadium.length == myOtherFavoriteStadium.length
); // false
console.log(
  "Testing strict equality Operator",
  myFavoriteStadium.length === myOtherFavoriteStadium.length
); // false

let myNumber = 123456;
let myNumberStr = "123456";
console.log("Testing strict equality operator", myNumber === myNumberStr);

let comingToClass = true;
console.log(comingToClass);
console.log("Testing Negation Operator", !comingToClass);
