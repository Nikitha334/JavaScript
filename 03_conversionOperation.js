let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

let valueInnumber = Number(score);
// console.log(typeof valueInnumber);
// console.log(valueInnumber);

let number = 33
let stringnumber = String(number);
// console.log(typeof stringnumber);

// console.log("2" + 1)
// console.log("2" + "1")
// console.log(2 + "1")
// console.log("2" + "1" + 1)

// console.log("2" > "1")
// console.log(null > "1")
// console.log(null >= 0)
// console.log(null <=  0)
// console.log(null ==  0)
 
let somenumber = "2"
let somnumber = 2
// console.log(somenumber === somnumber);

const djnrv = ["chenchu","jassu","sweety","raghavi","venni"];
let myobj ={
    name :"nikki",
    age : 21,
}
let me = function(){
    console.log("hello nikhitha")
}
// console.log(typeof djnrv);



// +++++++++++++++++++++++++++++++++STACK MEMORY AND HEAP MEMORY +++++++++++++++++
let myname = "nikhitha"
let myfullname = myname
myfullname = "kolla nikhitha"

console.log(myname)
console.log(myfullname);

let userOne ={
    email : "kollanikhitha@gmail.com",
    age : 20,
}

let userTwo = userOne
userTwo.email = "sweety@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)