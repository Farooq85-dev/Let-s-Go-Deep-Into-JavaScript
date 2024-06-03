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
console.log(obj1); // Intersting concept here. Please, note here.
console.log(obj2); // Intersting concept here. Please, note here.

// ********** The End ********** //
