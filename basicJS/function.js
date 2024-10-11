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