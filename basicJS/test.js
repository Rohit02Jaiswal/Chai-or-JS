"use strict" // treat all JS code as newer version

console.log("Hello duniya!");
const studentId = 12345;
let email = "rohit@gmail.com";
var password = "rohit@123";
// city = "Motihari";
let loversName;

// studentId = 845418;  // assignment to constant variable is not allowed

email = "sakshi@gmail.com";
password = "sakshi@123";
// city = "Bhagalpur";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([email, password, loversName]);

// alert(5+5);  // We are using nodejs, not browser

let undefine; // output: undefine
let emp = null; // output: object
console.table([typeof undefine, typeof emp]);

// Datatype conversion -------------------------
let score = "33";
console.log(typeof(score));
let convertedScore = Number(score);
console.log(typeof convertedScore);
console.log(convertedScore);

//  "33" => 33
// "33ac" => NaN
// true => 1; false => 0

let isLoggedIn = "Rohit";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false; "rohit" => true; "" => false

let someNum = 69;
console.log(typeof someNum); // datatype: number
let stringConversion = String(someNum);
console.log(typeof stringConversion); // datatype: string
