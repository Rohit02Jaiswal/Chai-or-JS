// function addTwoNums (num1, num2){
//     console.log(num1+num2);
// }
// let add = addTwoNums(5, 6);
// console.log(add);   // It returns undefined

function addTowInteger (num1, num2){
    return (num1+num2);
}
let sum = addTowInteger(5,5);
// console.log(sum);  // Output: 10

function loginUserMessage (username){
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Rohit"));
// console.log(loginUserMessage());  // Output: Undefined

// Packing multiple arguments in a single paramater --------------------
function packNums (...num){  // rest operator 
    return num;
}
// console.log(packNums(200,300,500)); // Output : [200,300,500]

// Error function and this keyword -----------------------------------
const user = {
    username: "Rohit",
    price: 999,

    welcomeMessg: function (){
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
