// ==== ITERATOR ====
/**
 * In computer
 */

/**
 * ITERATORS
 * .foreach()
 * .map()
 * .filter()
 * .reduce()
 * .find()
 * .every()
 * .some()
 */
/*
 * Example 1
 * .ForEach
 *  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * Performs the specified action for each element in an array.
 */
let myPeople = ["Ahliyat", "Osase", "Mac", "Patrick", "Ella", "Precious"];

myPeople.forEach((value, i, array) => {
  // console.log(value);
  // console.log(index);
  // console.log(array);
  console.log(`${myPeople[i]} is one of my people`);
});
let cars = ["Toyota corolla", "BMW", "Tesla", "Mercedes Benz", "Land Rover"];

cars.forEach((car) => {
  console.log(` I love ${car}`);
});

/**
 * Example 2
 * .Map()
 */

let myNumbers = [1, 3, 5, 7, 89, 11, 13];
myNumbers.map((Number) => {
  console.log(`${Number}` * 2);
});

//classwork
let myFavNumbers = [2, 3, 5, 7, 17, 10];
myFavNumbers.map((Num) => {
  console.log(`${Num}` * 3);
});

/**
 * Example 3
 * .map() on string
 */
let myFavFruits = ["Grapes", "Pineapple", "Watermelon", "Apple"];
myFavFruits.map((fruit) => console.log(`${fruit}!`));

/**
 * .filter()
 */

let countries = ["France", "Italy", "South Korea", "India", "California"];
let filteredCountry = countries.filter((country) => country.length < 11);
console.log(filteredCountry);

let users = [
  {
    id: 1,
    name: "Ahliyat",
    age: 17,
    isAdmin: true,
  },
  {
    id: 2,
    name: "Osase",
    age: 18,
    isAdmin: true,
  },
  {
    id: 3,
    name: "Mac",
    age: 19,
    isAdmin: false,
  },
  {
    id: 4,
    name: "Ella",
    age: 16,
    isAdmin: false,
  },
  {
    id: 5,
    name: "Precious",
    age: 92,
    isAdmin: false,
  },
  {
    id: 6,
    name: "Patrick",
    age: 43,
    isAdmin: false,
  },
];

let getAdmin = users.filter((user) => user.isAdmin === true);
console.log(getAdmin);

let augustinians = [
  {
    id: 1,
    name: "Bonnie bennett",
    age: 17,
    isAdmitted: true,
  },
  {
    id: 2,
    name: "Damon Salvatore",
    age: 18,
    isAdmitted: true,
  },
  {
    id: 3,
    name: "Caroline Forbes",
    age: 17,
    isAdmitted: false,
  },
  {
    id: 4,
    name: "Elena Gilbert",
    age: 21,
    isAdmitted: false,
  },
  {
    id: 5,
    name: "Alaric Saltzman",
    age: 40,
    isAdmitted: false,
  },
];
let filteredByAgeAndAdmission = augustinians.filter((augustinians) => {
  return augustinians.age <= 18 && augustinians.isAdmitted === true;
});
console.log(filteredByAgeAndAdmission);

const profile = [
  {
    id: 1,
    name: "jafar",
    age: 52,
    school: "lasu",
    country: "Nig",
  },
  {
    id: 2,
    name: "alimi",
    age: 15,
    school: "marusoft",
    country: "Nig",
  },
  {
    id: 1,
    name: "musa",
    age: 20,
    school: "OOU",
    country: "Nig",
  },
];
let filteredProfile = profile.filter((profile) => {
  return profile.age > 15 && profile.name === "musa";
});
console.log(filteredProfile);

const record = [
  {
    id: 1,
    fullname: "Tyler Lockwood",
    department: "Phlebotomy",
    age: 35,
    address: "11 damilola street",
  },
  {
    id: 1,
    fullname: "Stefan Salvatore",
    department: "Chemistry",
    age: 25,
    address: "11 ade-akanni street",
  },
  {
    id: 1,
    fullname: "Jeremy Gilbert",
    department: "Anatomy",
    age: 55,
    address: "11 Adeyemi street",
  },
  {
    id: 1,
    fullname: "Katherine Pierce",
    department: "Physiology",
    age: 55,
    address: "12 kelvin street",
  },
  {
    id: 1,
    fullname: "Matt Donovan",
    department: "Phlebotomy",
    age: 60,
    address: "3 damilola street",
  },
];

let filteredRecord = record.filter((record) => {
  return record.department === "Phlebotomy" && record.age > 2;
});
console.log(filteredRecord);

/**
 * reduce()
 */
let frequencies = [1, 3, 5, , 7, 10, 17];

let f = frequencies.reduce((a, b) => a + b);
console.log(f);

let myName = ["A", "H", "L", "I", "Y", "A", "T"];
let name = myName.reduce((pre, curr) => {
  return pre + curr;
}, `O. `);
console.log(name);

let sentence = [
  "I",
  " ",
  "A",
  "M",
  " ",
  "L",
  "E",
  "A",
  "R",
  "N",
  "I",
  "N",
  "G",
  " ",
  "J",
  "A",
  "V",
  "A",
  "S",
  "C",
  "R",
  "I",
  "P",
  "T",
  ".",
];
let reducedSentence = sentence.reduce((x, y) => {
  return x + y;
});
console.log(reducedSentence);

/**
 * .find()
 */

let bestCars = ["Toyota", "Honda", "Mitsubushi", "Volvo"];
let getCar = bestCars.find((car) => {
  return car.length >= 6;
});
console.log(getCar);

/**
 * .every()
 * The every() method tests whether all elements in the array pass
 * the test implemented by the provided function.
 * It returns a Boolean value.
 * Determines whether all the members of an array satisfy the specified test.
 */

const randomNum = [10, 20, 30, 40, 50, 60, 70];

const checkValue = randomNum.every((num) => num > 3); // True
console.log("checkValue", checkValue); // True

const evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
const checkEvenNumberValue = evenNumbers.every((even) => even < 0);
console.log("checkEvenNumberValue", checkEvenNumberValue); // false

/**
 * .some()
 * The some() method tests whether at least one element in the array passes
 * the test implemented by the provided function. It returns true if, in the array,
 * it finds an element for which the provided function returns true;
 * otherwise it returns false. It doesn't modify the array.
 */

const myFavSportName = [
  "Tennis",
  "Badminton",
  "Cricket",
  "Football",
  "Basketball",
];

const checkItemLength = myFavSportName.some((sport) => sport.length < 4);
console.log("checkItemLength", checkItemLength);

/**
 * Higher order function
 * A higher-order function is a function that either accepts functions
 * as parameters, returns a function, or both
 */
