/**
 * Arrays
 * Arrays are collections of list of items.
 * it is denoted  with square brackets []
 * each item in an array is seperated with a comma
 * with same data type or different data types
 * Each item in an array is at a numbered position, or index, starting at 0.
 */

let myGroceries = ["tomatoes", "fruits", "vegetables", "seasoning", "palm oil"];
let programmingLanguages = [
  "Javascript",
  "Python",
  "Java",
  "PHP",
  "C++",
  "C",
  "Ruby",
  "Go",
];
console.log("Programming Languages =>", programmingLanguages);

/**
 * How to access item in an array
 * array[index number]
 */
let UIFrameworkAndLibraries = [
  "Reactjs",
  "Angularjs",
  "Vuejs",
  "Svelte",
  "Nextjs",
  "JQuery",
];
console.log("UIFramework =>", UIFrameworkAndLibraries[0]);
console.log("UIFramework =>", UIFrameworkAndLibraries[1]);
console.log("UIFramework =>", UIFrameworkAndLibraries[2]);
console.log("UIFramework =>", UIFrameworkAndLibraries[3]);
console.log("UIFramework =>", UIFrameworkAndLibraries[4]);
console.log("UIFramework =>", UIFrameworkAndLibraries[5]);

/**
 * How to modify an existing item in an array
 * myArray[index to modify] = new value
 */
let myFavoriteColor = ["White", "Black", "Pink", "Red", "Purple"];
console.log(myFavoriteColor);

myFavoriteColor[4] = "lylac";
console.log(myFavoriteColor);

let myFavoriteFootballStadia = [
  "Wemberly",
  "San Siro",
  "Anfield",
  "Old Trafford",
  "Maracana",
  "Soccer City",
  "Camp Nou",
  "Villa Park",
  "Santiago Bernabeu",
  "Estadio Azteca",
];
console.log(myFavoriteFootballStadia);

myFavoriteFootballStadia[4] = "Mestalla Stadium";
myFavoriteFootballStadia[8] = "Allianz Arena";
console.log(myFavoriteFootballStadia);

// ======= Array Methods =======

/**
 * Get the number of items in an array
 * .length
 */

let myFavoriteStadia = [
  "Wemberly",
  "San Siro",
  "Anfield",
  "Old Trafford",
  "Emirate",
  "Etihad",
  "Camp Nou",
  "Villa Park",
];

console.log(myFavoriteStadia);
//get length
let stadiaLength = myFavoriteStadia.length;
console.log(stadiaLength);

/**
 * .push() add new item into an array
 * Appends new elements to the end of an array
 * and returns the new length of the array
 * @param items - New elements to add to the array
 */
let addNewStadia = myFavoriteStadia.push("Goodison Park");
console.log(addNewStadia);
console.log(myFavoriteStadia);

/**
 * .pop() remove an item in an array
 * Removes the last element from an array
 * and returns it.
 */
let fruits = ["mango", "banana", "pawpaw", "orange"];
let removeLastItem = fruits.pop();
console.log(removeLastItem);
console.log(fruits);
/**
 * .shift() remove an item in an array
 * Removes the first element from an array
 * and returns it.
 */
let friends = ["Precious", "Patrick", "Ella", "Osase", "Mac"];
let shiftFriends = friends.shift(); //Precious
console.log(shiftFriends);
console.log(friends);
/**
 * unshift()
 * Inserts new element at the start of an array and returns the new length of the array
 */

let mobileNetwork = ["MTN", "GLO", "AIRTEL", "9MOBILE"];
let unshiftItem = mobileNetwork.unshift("SPECTRANET");
console.log(unshiftItem);
console.log(mobileNetwork);

/**
 * .slice()
 * Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from
 * the end of the array. For example, -2 refers to the second to last element of the array.
 * The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
 * The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
 */
let myFavoriteFood = [
  "Bread",
  "Plantain",
  "Fried egg",
  "Cake",
  "Beans",
  "Jollof rice",
];
let sliceFoodOne = myFavoriteFood.slice(3, 6);
let sliceFoodTwo = myFavoriteFood.slice(2, 5);
let sliceFoodThree = myFavoriteFood.slice(-1);
let sliceFoodFour = myFavoriteFood.slice(-3, -1);
console.log(sliceFoodOne);
console.log(sliceFoodTwo);
console.log(sliceFoodThree);
console.log(sliceFoodFour);

/**
 * .split()
 * split a string into substrings using the specified separator
 * and return them as an array
 */
let myNigga = "Nnaemeka";
let splitNiggaName = myNigga.split("");
let splitNiggaNameTwo = myNigga.split();
console.log(splitNiggaName);
console.log(splitNiggaNameTwo);

/**
 * .join()
 * Adds all the elements of an array into a string, separated by the specified separator string.
@param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
 */

let splittedName = splitNiggaName.join("");
let splittedNameTwo = splitNiggaName.join();
let splittedNameThree = splitNiggaName.join("-");
console.log(splittedName);
console.log(splittedNameTwo);
console.log(splittedNameThree);

/**
 * .reverse()
 * Reverses the elements in an array in place.
 * This method mutates the array and returns
 * a reference to the same array
 */
const itemToReverse = ["Ella", "Patrick", "Precious", "Osase", "Mac"];
let reversedItem = itemToReverse.reverse();
console.log(reversedItem);

/**
 * .includes()
 * Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.
 */
let laptops = [
  "Dell",
  "HP",
  "Toshiba",
  "Asus",
  "Lenovo",
  "Samsung",
  "Lenovo",
  "Macbook",
];
let checkIfPresentOne = laptops.includes("HP");
let checkIfPresentTwo = laptops.includes("hp");
let checkIfPresentThree = laptops.includes("hp".toUpperCase());
let checkIfPresentFour = laptops.includes("Asus", 4);
let checkIfPresentFive = laptops.includes("Asus", 0);
console.log(checkIfPresentOne);
console.log(checkIfPresentTwo);
console.log(checkIfPresentThree);
console.log(checkIfPresentFour);
console.log(checkIfPresentFive);

/**
 * splice()
 *
 */
let countries = [
  "Nigeria",
  "South Korea",
  "India",
  "France",
  "USA",
  "Russia",
  "Italy",
  "Canada",
];
let splicedCountries = countries.splice(0, 3);
console.log(splicedCountries);

/**
 * .sort()
 * Sorts an array in place. This method mutates the array and returns a reference to the same array.
 * @param compareFn
 * Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
 */

let months = ["Jan", "March", "APril", "May", "November"];
months.sort();
console.log(months);

let myFavoriteNumbers = [7, 3, 5, 2, 9, 4, 1, 10, 6, 8];
console.log(
  "ascending order =>",
  myFavoriteNumbers.sort((a, b) => a - b)
);
console.log(
  "descending order =>",
  myFavoriteNumbers.sort((a, b) => b - a)
);

/**
 * Nested Array
 * an array that contains another array
 * is known as a nested array.
 */
const favoriteDoubleNumber = [
  [1, 0], // index 0
  [1, 2],
  [2, 3],
  [3, 4],
];

/**
 * Items/Elements can be accessed in a nested array using bracket notation
 * specifying the index value. For example to access the various items
 * in the nested array "favoriteDoubleNumber", we can achieve that as follows
 */
const firstItem = favoriteDoubleNumber[0]; // [1, 0]
console.log(firstItem);
const secondItem = favoriteDoubleNumber[1]; // [1, 2]
console.log(secondItem);

// To accessed the last item in the third element

const accessLastItemOfFourthElement = favoriteDoubleNumber[3][1];
console.log(accessLastItemOfFourthElement); // 4

/**
 * Another questions
 */
const twoWordEach = [
  ["alimi", "kehinde"],
  ["animashaun", "khalid"],
  ["Liammed", "Jafar"],
  ["Aliyah", "Orenuga"],
];
const getKhalid = twoWordEach[1][1];
const getAliyah = twoWordEach[3][2];
console.log(getKhalid);

/**
 * Convert array to string
 */

const names = ["hello", "tolu", "mide"];
const str = names.toString();
console.log(str); // hello,tolu,mide
console.log(typeof str);

/**
 * string to array
 */
const arr = str.split(","); // hello,tolu,mide
console.log(arr); // [ 'hello', 'tolu', 'mide' ]
console.log(typeof arr);

const joined = arr.join();
console.log("joined =>", joined);

console.log(names.join(""));
console.log(names.join("-"));
console.log(names.join(" "));
console.log(names.join(", "));