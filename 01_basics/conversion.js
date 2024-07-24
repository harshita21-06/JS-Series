/* 
let score = 33;
console.log(typeof score); //number
console.log(typeof (score)); //number */

/*
let score = "33";
console.log(typeof score); //string

let scoreInNumber = Number(score); //Type Conversion
console.log(typeof scoreInNumber); //number
console.log(scoreInNumber); //33
*/

// let score = "33abC";
// console.log(typeof score); //string
// console.log(score); //33abc

// let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //NaN :- Not a Number


// let score = null;
// console.log(typeof score); //object
// console.log(score); //null

// let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //0


// let score = undefined;
// console.log(typeof score); //undefined
// console.log(score); //undefined

// let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //NaN :- Not a Number


// let score = true;
// console.log(typeof score); //boolean
// console.log(score); //true

// let scoreInNumber = Number(score);
// console.log(typeof scoreInNumber); //number
// console.log(scoreInNumber); //1

/* 
NOTES :- 
"33" => 33
"33abc" => NaN
true => 1, false => 0 
"" => false, "Hello" => true
*/

// let isLogIn = 1;
// let booleanIsLogIn = Boolean (isLogIn);
// console.log(booleanIsLogIn); //true
// console.log(typeof booleanIsLogIn); //boolean


let isLogIn = ""; //empty string
let booleanIsLogIn = Boolean (isLogIn);
console.log(booleanIsLogIn); //false
console.log(typeof booleanIsLogIn); //boolean

