// ********** Stack Memory Vs Heap Memory **********// 

/* It is an intersting concept in JavaScript. Let's break down this by 
following examples. */

/* In Simple Words, Primitive Data types used Stack Memory. Primitive values are immutable
(can't be changed). However, we are changing it's copy value not it's original value. */

let name1 = "Muhammad Azam";
let name2 = name1;
name2 = "Muhammad Farooq";
console.log(name1); //Excepted Output will be "Muhammad Azam"
console.log(name2); //Excepted Output will be "Muhammad Farooq"

/* In Simple Word's, Non-Primitive data types are using Heap memory.They are mutable
(can be changed).  */

let obj1 = {
    name: "Muhammad Arslan",
    class: "WAM-5",
    section: "A+",
}

let obj2 = obj1;

obj2.name = "Muhammad Faiq";
obj2.class = "WAM-10";
obj2.section = "B+";
console.log(obj1); // Interesting concept here. Please, note here.
console.log(obj2); // Interesting concept here. Please, note here.

// ********** The End ********** //

// ********** Important Methods ********** //

/* This method type is String Object. Strings are not true arrays, and therefore they
do not have array methods. They can be accessed like an array-indexing. Also, we can apply
length property. */

let name3 = new String("Muhammad Farooq");
console.log(typeof name3); //Excpected type will be Object
console.log(name3[0]); //Excepected output will be 'm'
console.log(name3.length); //Excepected output will be 15

/* Slice Method with Negative indexing. */

let name5 = "Muhammad Fiaz";
console.log(name5.slice(-10, 8)); /*Excpected output will be "Muhammad". Negative
indexing start from the end. If we will give the negative index numbering greater
than the length it will simply start from end of string character. */
console.log(name5.slice(0, 9)); //Excpected output will be same as in top

/* subString Methods */

console.log(name5.substring(-10, 8)); //Negative indexing will not worked in here
console.log(name5.substring(0, 9)); ////Excpected output will be "Muhammad"

/* toLaclaleString */

const thaousand = 1000000000;
console.log(thaousand.toLocaleString());//Output according to the default US format. 
console.log(thaousand.toLocaleString('en-Pk')); /*Excpected output will be according to
number format of PAKISTAN.*/

