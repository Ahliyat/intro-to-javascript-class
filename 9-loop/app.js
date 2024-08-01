// ==== LOOP ====

/**
 * To get 0 to 10
 */
console.log("counting manually 1-10");
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

/**
 * Loop is used to execute a block of code multiple times
 * for loop
 * while loop
 * do loop
 */

/**
 * For loop: This is used to execute block of codes multiple times with known destination
 */
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   console.log(element)

// }

/**
 * Incremental Operator: +=
 * Decremental Operator: -=
 */
let s = 15;
//s++ means s will increase by 1
s++;
console.log(s);

let t = 7;
t--;
console.log(t);
// t-- means t will decrease by 1
/**
 * Example one
 * count 0-20 using for loop
 */
for (let i = 0; i <= 20; i++) {
  console.log("using for loop to count 0-20", i);
}

/**
 * Example 2
 * counting 1-100 using for loop
 */
for (let i = 1; i <= 100; i++) {
  console.log("Counting 1-100 using for loop", i);
}
/**
 * Example 3
 * counting 20-1 using for loop
 */
for (let i = 20; i >= 1; i--) {
  console.log("Counting 20-1 using for loop", i);
}
/**
 * Example 3
 *  loop through an array of favorite food
 */

let myFavFood = [
  "Bread",
  "Plantain",
  "Fried egg",
  "Cake",
  "Beans",
  "Jollof rice",
];

for (let i = 0; i < myFavFood.length ; i++) {
  console.log(`${myFavFood[i]} is one of my favorite food`);
}

/**
 * Example 4
 * loop through an array of favorite stadia
 */
let favStadia = [
  "  Emirates Stadium",
  "Old trafford",
  "Etihad Stadium",
  "Stamford Bridge",
  "Allianz Arena",
  "Villa Park",
  "Everton Stadium",
  "Anfield",
  "Wemberly",
  "Prc des Princes",
  "Moshood Abiola",
  "Tafawa Balewa Stadium",
  "Lluis Companys Olympic Stadium",
  "Tottenham Hotspur Stadium",
  "Camp nou",
  "Celtic Park",
  "Estadio asteca",
  "The Maracana",
  "Santiago bernabeu",
];

for (let i = 0; i < favStadia.length ; i++) {
  console.log(`${favStadia[i]} is one of my favorite Stadium`);
}


/**
 * Example 4
 * loop through an array of favorite stadia
 */

let placesILove = [
  "South Korea",
"California",
"Italy",
"Canada",
"India",
"France",
"Ekiti"
]

for (let i = 0; i < placesILove.length; i++) {
  console.log(`${placesILove[i]} is one of the places i would love to visit`);
}



/**
 * Example 5
 * multiplication
 * 2 * 1 = 2
 * 2 * 2 = 4
 * 2 * 3 = 6
 * 2 * 4 = 8
 * 2 * 5 = 10
 */
let firstmultiplier = [
  1,
  2,
  3,
  4,
  5,
  
];
let secondmultiplier = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
];

for (let i = 0; i < firstmultiplier.length; i++) {
  for (let j = 0; j < secondmultiplier.length; j++) {
    let answer = firstmultiplier[i] * secondmultiplier[j];
    console.log(`${firstmultiplier[i]} * ${secondmultiplier[j]} = ${answer}`);
  }
}

/**
 * Assignment 
 * create a multiplication table
 * from 1-12 using "for loop"
 */
let multiplier = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let multiplierTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < multiplier.length; i++) {
  for (let j = 0; j < multiplierTwo.length; j++) {
    let answer = multiplier[i] * multiplierTwo[j];
    console.log(`${multiplier[i]} * ${multiplierTwo[j]} = ${answer}`);
  }
}
