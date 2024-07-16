// let
// const

// Declearing variable with let keyword
let variableName;
let VariableName;
console.log(variableName); // undefined is return

let mySchoolName;
mySchoolName = "Marusoft Academy";
console.log(mySchoolName);

// Declearing variable with const keyword

const PI = Math.PI;
console.log(PI);

const myIdentityNumber = 12233333333;
// myIdentityNumber = 677888888
console.log(myIdentityNumber); // TypeError: Assignment to constant variable.

// String Concatenation or string manupulation
let firstname = "Jon";
let lastname = "Doe";
let middlename = "theresa";
// Old way of concatenating string
let fullName = firstname + " " + middlename + " " + lastname;
console.log("Old way of concatenating string =>", fullName);

// es6 way of String Concatenation or string manupulation
// New way of concatenating string
let fullNameInEsSix = `${firstname} ${middlename} ${lastname}`;
console.log("es6 way of joining string =>", fullNameInEsSix);
