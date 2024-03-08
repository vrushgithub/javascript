// Object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "vrushabh",

    "full name": "Vrushabh Chaudhari",
    
    age: 18,

    location: "pune",
    
    email: "vrushabh@google.com",

    isLoggedIn: false,

    [mySymbol]: "myKey1",

    lastLoginDays:["Monday", "Friday"]

    
}

JsUser.email = "vrushabhchatgpt@gmail.com"
// Object.freeze(JsUser);

JsUser.email = "vrushabh@microsoft.com"
console.log(JsUser);

console.log(JsUser);
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySymbol]);

JsUser.greeting = function(){
    console.log("hello, JS user");
}
JsUser.greetingTwo = function(){
    console.log(`hello, JS user, ${this["name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
