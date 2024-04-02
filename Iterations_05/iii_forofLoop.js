const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greeting = "Hello vrushabh"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA' , "United State of America")
map.set('Fr', "France")
map.set('IN',"India")

console.log(map);
for (const [key, value] of map) {
    console.log(key, ':-' , value );
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(`key, ':-, value`);
// }
// for of loop structure is not iterable for OBJECT

// For in Loop
const myObjects = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObjects) {
    console.log(`${key} short is for ${myObjects[key]}`);
}

const progLanguages = ["js", "cpp", "rb", "py", "php"]

for (const key in progLanguages) {
   console.log(key);
}
for (const key in progLanguages) {
    console.log(progLanguages[key]);
}

const coding = ["JS", "CPP" , "PYTHON" , "RUBY" , "JAVA"]
coding.forEach(  function name (iteam) {
    console.log(iteam);
}  )

coding.forEach ( (value)  => {
    console.log(value);
} )

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach(  (item, index, arr) => {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageNmae: "JavaScript",
        FileNameExtension: "js"
    },
    {
        languageNmae: "Python",
        FileNameExtension: "py"
    },
    {
        languageNmae: "Java",
        FileNameExtension: "java"
    }
]
myCoding.forEach( (item)  => {
    console.log(item.languageNmae);
}  )