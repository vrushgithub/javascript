const myNums = [1,2,3,4,5,6,7,8,9]

const newNum = myNums.filter(  (num)  => num > 4) 
console.log(newNum);

const newNums = []
myNums.forEach(  (num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);

// Map

// const myNumbers = [1,2,3,4,5,6,7,8,9]
// const newNumber = myNumbers.map(   (num) =>  num + 10 )
// console.log(newNumber);

const myNumbers = [1,2,3,4,5,6,7,8,9]
// SCOEP{}
// const newNumber = myNumbers.map(  (num) =>  { return num + 10})

const newNumber = myNumbers.map(   (num) => num * 10).map(  (num) => num + 1)
                            .filter(   (num)  => num > 40)
console.log(newNumber);


// reduce
const myNumss = [1,2,3]

// const myTotal = myNumss.reduce(function (accumalator, currentvalue){
//     // console.log(`accumalator ${accumalator} and currentvalue ${currentvalue}`);
//     return accumalator + currentvalue
// },0)

const myTotal = myNumss.reduce(  (accumalator, currentvalue)  =>  accumalator + currentvalue, 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 3999
    },
    {
        iteamName: "JAVA",
        price: 4499
    },
    {
        itemName: "CPP",
        price: 4499
    }

]

const priceTopay = shoppingCart.reduce( (accumalator, item) => accumalator + item.price, 0)
console.log(priceTopay);

