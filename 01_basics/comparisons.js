// Always compare in same data types

/*
console.log(null > 0)  //false
console.log(null == 0) //false
console.log(null >= 0) //true
*/
//NOTE :- The reason that an equality check == and comparisons > < >= <= work differently, 
//Comparisons convert null to a number, treating it as 0.
//That's why (3) null >= 0 is true and (1) null > 0 is false.
//Same with undefined. But in undefined the answer will always be false.


/*
=== -> Triple Check

console.log("2" === 2) //false. As datatype is not same.
*/