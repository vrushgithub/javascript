// if

// const score = 200

// if(score > 300){
//     let power = "Fly"
//     console.log(`User power: ${power}`);
// }
// else{
//     console.log("false");
// }

// const balance = 1000
// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

 const userLoggedIn = true
 const debitCard = true

// if statement execute after both condition are true otherwise is not execute
 if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
 }

 const loggedInFromGoogle = false
 const loggedInFromEmail = true

// if statement execute after two of one condition is true otherwise not execute
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
