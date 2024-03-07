// Dates & Times

let myDate = new Date()

console.log(typeof myDate);

console.log(myDate);

console.log(myDate.toString());

console.log(myDate.toISOString());

console.log(myDate.toLocaleDateString());

console.log((myDate.toLocaleTimeString()));

console.log(myDate.toTimeString());

console.log(myDate.getTimezoneOffset());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(myCreatedDateTime.getTime());

console.log(Math.floor(Date.now()/1000));