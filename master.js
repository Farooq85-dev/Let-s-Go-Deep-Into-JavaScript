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

/* toLocaleDateString */
const myDt0 = new Date();
console.log(myDt0.toLocaleDateString()); //Excpected output will be current date in this Format 04/09/2024

/* toDateString */
const myDt1 = new Date();
console.log(myDt1.toDateString()); //Excpected output will be current date in this Format e.g Tue Jan 04 2024  

/* toISOString */
const myDt2 = new Date();
console.log(myDt2.toISOString()); //Excpected output will be current date in this Format e.g 2024-06-04T13:44:41.310Z  

/* toJSON */
const myDt3 = new Date();
console.log(myDt3.toJSON()); //Excpected output will be same as to toISOString Format

/* toLocaleString */
const myDt4 = new Date();
console.log(myDt4.toLocaleString()); //Excpected output will be like this 04/06/2024, 6:48:59 pm

/* toLocaleTimeString */
const myDt5 = new Date();
console.log(myDt5.toLocaleTimeString()); //Excpected output will be like this 6:48:59 pm

/* copyWithin */
/* This method will copy the array elements within same array. It will give the same length in return. */
let arr0 = [0, 25, 5, 8, 9, 45, 4, 5];
//syntax=> copyWithin(target,start,end)
console.log(arr0.copyWithin(2, 4, 6));

/* entries */
// It will gives the itterator object in return. It will behave like object
console.log(arr0.entries());
console.log(arr0[3]);

/* fill */
let arr1 = ["a", "b", "c", "d", "x", "t", "e", "g"];
//Syntax=> .fill(value, start, end)
console.log(arr1.fill("Farooq", 3, 7));

/* flat */
let nestedArray = [5, 85, 75, 5945, 9645, [41, 89, 78, [32, 9, 8, 471, ["Muhammad Farooq", "Faizan"]]]];
//Syntax=> .flat(5) Inside paranthesis you will provide value of how much deep (means nested) it will go for flatness of array
console.log(nestedArray.flat(3));

/* filter */
let playerNames = ["Babar-Azam", "Rizwan", "Saim-Ayub", "M-Amir"];
const fn = playerNames.filter((arrayElemnts) => arrayElemnts === "Babar-Azam");
console.log(fn); //We want to filter the name that is equal to the "Babar-Azam"

/* findLast */
let classFellows = ["Anas", "Ahad", "Raza", "Ali"];
let fn1 = classFellows.findLast((arrayElemnts) => { return arrayElemnts[0] }); //It itterate in the reverse order
console.log(fn1);

/* findLastIndex */
let laptopBrands = ["Hp", "Dell", "Asus", "Toshiba", "Asus"];
const fn3 = laptopBrands.findLastIndex((arrayElemnts) => { return arrayElemnts === "Asus" });
console.log(fn3); /*Itterate in the reverse order and will give the first element from the end and
 indexing start from start of the array */

/* includes */
let numbers = [0.25, 51.5, 1.581, 58.44, 0.25, .5, 4];
console.log(numbers.includes(0.25));//Output in the boolean true or false

/* reduce */
let marks = [85, 58, 78, 92, 49, 67, 65, 49];
let initialValue = 20;
let fn4 = marks.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(fn4);//If we will not give the initailaValue then it will select the first element of array as the initail value

/* toLocaleString & toString */
console.log(marks.toString()); //Convert inti String
console.log(marks.toLocaleString());//Excpected output will be same as toString
