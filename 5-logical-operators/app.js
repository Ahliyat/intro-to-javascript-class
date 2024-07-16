// And Operator (&&)
// Or Operator (||)
// Not Operator (!)

/**
 * And Operator (&&)
 * when && is placed between two js expression, we expexct that both expression are true to return a truthy value, otherwise, it returns a falsy value
 */
let isRaining = false;
let umbrellaExist = true;
let isVehicleAvailable = true;

let checkReasonToGoOut = isRaining && umbrellaExist;
console.log(checkReasonToGoOut); //falsy value

let anotherReasonToGoOut = umbrellaExist && isVehicleAvailable;
console.log(anotherReasonToGoOut); // truthy value

/**
 * Or Operator (||)
 * when || is placed between two js expression, we expexct that either of both expression is true to return a truthy value, otherwise, it returns a falsy value
 */

let computerAvailable = true;
let noProgrammingClass = false;
let learnSoftwareDev = computerAvailable || noProgrammingClass;
console.log(learnSoftwareDev); //truthy value
/**
 * Negation Operator (||)
 * when ! prepends a javascript expression, it negates/reverses the value of a boolean either of both expression is true to return a truthy value, otherwise, it returns a falsy value
 */
let changeExpression = !isRaining;
console.log(changeExpression);
