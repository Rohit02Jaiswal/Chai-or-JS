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

// data types and conversion
console.log("1"===1);
// Datatypes summaries -----------------------------------------
/*
Primitive:
7 types: String, Number, Boolean, null, undefined, symbol, BigInt

Reference type (Non-Primitive):
Array, Objects, Functions
*/

/*
Memories ----------------------------------------------------------
Two types of memories: Stack (Primitive), Heap (Non-Primitive)
*/

/*
String:------------------------------------------------------------------------------------------------
*/
let name = "Rohit";
let repoCount = 30;
// console.log(name + repoCount + "Project"); // Old syntax
console.log(`Hello may name is ${name} and my repo count is ${repoCount}`); // Modern syntax

const newString = "      user name is jaiswal      ";

console.log(newString);
console.log(newString.trim());

/* 
Numbers and Maths ----------------------------------------

*/
const nums = 400; // datatype: number
const balance = new Number(100); // output: [Number: 100]
console.log(balance);

console.log(Math.random()); // Range : 0-1
console.log((Math.random()*10) + 1); // output: 10.26646477
console.log(Math.floor((Math.random()*10) + 1)); // output: 7

const min = 10;
const max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min)); // output: 18

/* 
Dates in javascript
*/
let myDate = new Date();
console.log(myDate);  // output: 2024-09-14T14:38:54.929Z
console.log(myDate.toString()); // output: Sat Sep 14 2024 14:38:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // output: Sat Sep 14 2024
console.log(myDate.toLocaleString()); // output: 9/14/2024, 2:38:54 PM
console.log(myDate.toLocaleDateString()); // output: 9/14/2024
console.log(myDate.toLocaleTimeString()); // output: 2:38:54 PM
// typeof date is always an object **Interview question
let createDate = new Date(2023, 0, 21);
console.log(createDate.toDateString()); // output: Sat Jan 21 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp); // output: 1726325222786 millisecond
