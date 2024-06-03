// ********** Stack Memory Vs Heap Memory **********// 

/* It is an intersting concept in JavaScript. Let's break down this by 
following examples. */

/* In Simple Words, Primitive Data types used Stack Memory. Primitive values are immutable
(can't be changed). However, we are changing it's copy value not it's original value. That's why,
we are accessing "Muhammad Azam" still in the console. */

let name1 = "Muhammad Azam";
console.log(name1); //Excepted Output will be "Muhammad Azam"
name1 = "Muhammad Farooq";
console.log(name1); //Excepted Output will be "Muhammad Farooq"

