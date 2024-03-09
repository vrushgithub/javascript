// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 6

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("Feb");
        break;
    
    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    default:
        console.log("default");
        break;
}

// Nullish coaleshing Operator(??)

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 10

val1 = null ?? 10 ?? 22


console.log(val1);

// TerniaryOperator
// condition ? true : false

const IceTeaPrice = 100
IceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");;










