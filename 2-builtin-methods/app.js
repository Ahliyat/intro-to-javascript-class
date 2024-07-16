// ==== Builtin method in JS ====
/**
 * .length return the number of characters in a string
 */

console.log("Ahliyat Orenuga".length);

/**
 * (method) String.toUpperCase(): string
 * Converts all the alphabetic characters in a string to uppercase.
 */
console.log(
  "marusoft academy where aspiring tech guys learn how to code".toUpperCase()
);

/**
 * (method) String.toLowerCase(): string
 * Converts all the alphabetic characters in a string to lowercase.
 */
console.log(
  "Marusoft Academy where aspiring Tech Guys learn how to Code".toLowerCase()
);

/**
 * Return a character based on the index number specified in square bracket
 */
console.log("Ahliyat", "Orenuga"[0], "Precious");

console.log("Return first character", "Liverpool"[0]);
console.log("Return second character", "Liverpool"[1]);
console.log("Return third character", "Liverpool"[2]);
console.log("Return four character", "Liverpool"[3]);
console.log("Return fifth character", "Liverpool"[4]);
console.log("Return sixth character", "Liverpool"[5]);
console.log("Return seventh character", "Liverpool"[6]);
console.log("Return eigth character", "Liverpool"[7]);
console.log("Return ninth character", "Liverpool"[8]);

/**
 * new date()
 * .toLocaleDateString(): Converts a date to a string by using the current or specified locale.
 */

console.log("current date", new Date());
console.log("current date in locale", new Date().toLocaleDateString());
console.log("current second", new Date().getSeconds());
console.log("current minute", new Date().getMinutes());
console.log("current hour", new Date().getHours());
console.log("current day", new Date().getDay());
console.log("current month", new Date().getMonth());
console.log("current year", new Date().getFullYear());

/**
 * Math.random()
 * Math.floor()
 * Math.ceil()
 * Math.rand()
 */

/**
 * (method) Math.random(): number
 * Returns a pseudorandom number between 0 and 1.
 */

console.log(Math.random());

/**
 * Rnadom between 0 and 10
 */
console.log(Math.random() * 10);
/**
 * (method) Math.floor(x: number): number
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x — A numeric expression.
 */
console.log(Math.floor(Math.random() * 20));
/**
 * (method) Math.round(x: number): number
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x — The value to be rounded to the nearest inte
 */
console.log(Math.round(Math.random() * 20));

/**
 * (method) Math.ceil(x: number): number
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x — A numeric expression.
 */
console.log(Math.ceil(3.556));
console.log(Math.ceil(6.556));
