// arrays
const myArr =[1,2,3,4,5]
console.log(myArr);
console.log(myArr[2]);

const myArray2 = new Array(1,2,3,4)
console.log(myArray2[2]);

myArr.push(3)
myArr.push(11)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(4)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5));
console.log((myArr.includes(11)));
// It's show the value of index 3 is includes so return this value otherwise it's return -1 
console.log(myArr.indexOf(3));

// slice, splice
console.log("A" , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B" , myArr);

const myn2 = myArr.splice(1,3)

console.log("c" , myArr);
console.log(myn2);


const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash" , "Batman"]

// Concatination
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// Spread operator
const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros);

const another_array = [1,2,3,[4,5,6],7,[6,8,[4,5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Vrushabh"));
console.log(Array.from("Vrushabh"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));

