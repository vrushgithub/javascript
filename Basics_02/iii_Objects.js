// non singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sonakshi"
tinderUser.email = "sonakshi@google.com"

// Singleton object
// const tinderUser = new Object()
// console.log(tinderUser);

const regularUser = {
    email: "sonakshi@google.com",
    fullname:{
        userFullName:{
            firstName: "sonakshi",
            lastName:"chaudhari"
        }
    }
}
console.log(regularUser.fullname.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)

// spread operator
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`emails`));
