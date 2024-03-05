const accountId = 144553
let accountEmail = "vrushabh@google.com"
var accountPassword = "333333"
accountCity = "Pune"
let accountState;

// accountId = 030303 Note Allowed

accountEmail = "vc@ss.com"
accountPassword = "123456789"
accountCity = "Mumbai"
console.log(accountId);

/*
Prefer not to ues var because of issue in block scope and funtional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);