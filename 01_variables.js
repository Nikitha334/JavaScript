const accountId = 14432
let accountEmail = "kollanikoihthareddy@gmail.com"
var accountpassword = "sweety@123" 
accountCity = "Madanapalli"

// accountId = 2  // we can't change or edit the const variable data;
/*
PREFER NOT TO USE VAR:
because of issue in block scope and function

*/
accountEmail = "sweet@gmail.com"
accountpassword = "123"
accountCity = "hyd"

console.log(accountId)
console.table([accountId,accountEmail,accountpassword,accountCity]);