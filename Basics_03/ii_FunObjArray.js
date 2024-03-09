function calculateCartPrice (){
    return num1
}
// console.log(calculateCartPrice(200,400,500));

const user = {
    username:"sonakshi",
    password: 123
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and password is ${anyobject.password}`);
}
handleObject(user)

const myNewArray = [20,30,40,50]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));