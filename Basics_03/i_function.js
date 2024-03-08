function sayMyName(){
    console.log("V");
    console.log("R");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result;

    return number1 + number2
}

const result = addTwoNumbers(9,2)
// console.log("Result:", result);

function loginuserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginuserMessage("sonakshi"))
console.log(loginuserMessage());

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2000,4000,6000,8000));









