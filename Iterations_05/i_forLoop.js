// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is third odd number");
    }
    console.log(element);
}  

for( let i = 1; i <= 12; i++){
    console.log(`Table of : ${i}`);
    for(let j = 1; j <= 12; j++){
        // if(i == j){
        //     let multiply = (i*i+j*j)
        //     console.log(multiply);
        // }
        console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["Flash", "Batman", "Superman"]
console.log(myArray.length);
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}

// KeyWords: break and continue

for(let i = 0; i <= 20; i++){
    if(i == 6){
        console.log(`Detectrd 6`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 0; i <= 20; i++){
    if(i == 6){
        console.log(`Detectrd 6`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}













