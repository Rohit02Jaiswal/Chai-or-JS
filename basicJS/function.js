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

