// function addTwoNums (num1, num2){
//     console.log(num1+num2);
// }
// let add = addTwoNums(5, 6);
// console.log(add);   // It returns undefined

function addTowInteger(num1, num2) {
    return (num1 + num2);
}
let sum = addTowInteger(5, 5);
// console.log(sum);  // Output: 10

function loginUserMessage(username) {
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Rohit"));
// console.log(loginUserMessage());  // Output: Undefined

// Packing multiple arguments in a single paramater --------------------
function packNums(...num) {  // rest operator 
    return num;
}
// console.log(packNums(200,300,500)); // Output : [200,300,500]

// Error function and this keyword -----------------------------------
const user = {
    username: "Rohit",
    price: 999,

    welcomeMessg: function () {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessg()

// function chai(){
//     console.log(this);
// }
// chai();

// const chai = function (){
//     let username = "jaiswal";
//     console.log(this.username);
// }

const chai = () => {
    let username = "jaiswal";
    console.log(this.username);
}
// chai();

//  Arrow function ----------------------------
const addTwo = (num1, num2) => {
    return num1 + num2;
}
// console.log(addTwo(5,5));

// Implicit return  (mostly used in React)
const addNum = (num1, num2) => num1 + num2;
const addDigit = (num1, num2) => (num1 + num2);
/*
How does JavaScript excute code + callstack?

JavaScript works on three phases:

Global Execution Context
Memory phase / Creation phase
Execution phase
Phase 1: Global Execution Context The value of this keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

Phase 2: Memory creation phase During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

Phase 3: Execution phase After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):

Memory creation phase
Execution phase 📝The return value of the 'Function Execution' context is passed to the Global Execution Context
*/

// Switch Case statement ----------------------------------------------------
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 4;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     default:
//         console.log("No match");
//         break;
// }

/*
falsy value:  false, 0, -0, bigInt 0n, "", null, undefined, NaN
truthy value:  all value except falsy value- eg: "0", 'false', " ", [], {}, function(){}
*/

// Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
// console.log(val1);

// Loops/Iterations --------------------------------------------
// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element);
}
// break, continue

//  while & do while loop
let index = 0;
while (index<=10) {
    // console.log(`Value of index is ${index}`);
    index =  index + 2;
}

let myArray = ['Rohit', 'Sakshi', 'Patna'];
let arr = 0;
while (arr < myArray.length) {
    // console.log(`Value of array is ${myArray[arr]}`);
    arr += 1;
}

let score = 8;
do {
    // console.log(`score is ${score}`);
    score++;
} while (score<10);


// for of loop (Array specific loop) -----------
const forOfArr = [1, 2, 3, 4, 5];
for (const val of forOfArr) {
    // console.log(val);
}

// Maps ------------------------
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('IN', "India");  // Map avoid duplicate values
// console.log(map);

for (const mp of map) {  // output will be in the form of array
    // console.log(mp);
}

for (const [key, value] of map) {
    // console.log(`${key} :-  ${value}`);
}

// object is not iterable using for of loop
// Map is not iterable using for in loop
const Obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swft: "Swift by apple"
}

// for in loop ------------
for (const key in Obj){
    // console.log(`${key} is shortcut for ${Obj[key]}`);
}

// for each loop ---------------
const coding = ['JS', 'Java', 'C++', 'Python', 'Go'];
coding.forEach(itr => {
    // console.log(itr);
});
// forEach loop kux return nhi krta hai.

// Filter Map and reduce -------------
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);
