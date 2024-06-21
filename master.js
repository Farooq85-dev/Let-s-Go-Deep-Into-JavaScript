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
};

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
console.log(
  name5.slice(-10, 8)
); /*Excpected output will be "Muhammad". Negative
indexing start from the end. If we will give the negative index numbering greater
than the length it will simply start from end of string character. */
console.log(name5.slice(0, 9)); //Excpected output will be same as in top

/* subString Methods */
console.log(name5.substring(-10, 8)); //Negative indexing will not worked in here
console.log(name5.substring(0, 9)); ////Excpected output will be "Muhammad"

/* toLaclaleString */

const thaousand = 1000000000;
console.log(thaousand.toLocaleString()); //Output according to the default US format.
console.log(
  thaousand.toLocaleString("en-Pk")
); /*Excpected output will be according to
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
let nestedArray = [
  5,
  85,
  75,
  5945,
  9645,
  [41, 89, 78, [32, 9, 8, 471, ["Muhammad Farooq", "Faizan"]]],
];
//Syntax=> .flat(5) Inside paranthesis you will provide value of how much deep (means nested) it will go for flatness of array
console.log(nestedArray.flat(3));

/* filter */
let playerNames = ["Babar-Azam", "Rizwan", "Saim-Ayub", "M-Amir"];
const fn = playerNames.filter((arrayElemnts) => arrayElemnts === "Babar-Azam");
console.log(fn); //We want to filter the name that is equal to the "Babar-Azam"

/* findLast */
let classFellows = ["Anas", "Ahad", "Raza", "Ali"];
let fn1 = classFellows.findLast((arrayElemnts) => {
  return arrayElemnts[0];
}); //It itterate in the reverse order
console.log(fn1);

/* findLastIndex */
let laptopBrands = ["Hp", "Dell", "Asus", "Toshiba", "Asus"];
const fn3 = laptopBrands.findLastIndex((arrayElemnts) => {
  return arrayElemnts === "Asus";
});
console.log(
  fn3
); /*Itterate in the reverse order and will give the first element from the end and
 indexing start from start of the array */

/* includes */
let numbers = [0.25, 51.5, 1.581, 58.44, 0.25, 0.5, 4];
console.log(numbers.includes(0.25)); //Output in the boolean true or false

/* reduce */
let marks = [85, 58, 78, 92, 49, 67, 65, 49];
let initialValue = 20;
let fn4 = marks.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(fn4); //If we will not give the initailaValue then it will select the first element of array as the initail value

/* toLocaleString & toString */
console.log(marks.toString()); //Convert inti String
console.log(marks.toLocaleString()); //Excpected output will be same as toString

/* object */

//Singletone
const obj = new Object();
console.log(typeof obj);
//Non-Singletone
let obj3 = {};
console.log(typeof obj3);

/* Methods */

/* freeze entire object via freeze*/
let obj4 = {
  name: "Muhammad Ahmed",
  class: "WAM-10",
  Roll_No: "14524",
  hobby: "Hockey",
  favourite_Color: "Yellow",
};
Object.freeze(obj4); //Applying the freeze will freeze entitre object. Means we cannot change the object values;
obj4["Roll_No"] = "4124552"; //Excpected output will be 14524, because, object is freezed.
console.log(obj4);

/* freeze single property via property descriptors */
let obj5 = {
  user_Name: "Ahad",
  user_Email: "ahad2gamil.com",
  user_Password: "******",
};
Object.defineProperty(obj5, "user_Email", {
  writable: false,
  configurable: false,
});
obj5["user_Email"] = "ahad123@gmail.com"; //This email will not reflect into the object because we have freezed it.
obj5["user_Password"] = "818787";
console.log(obj5);

/* methods inside the object */
//What is 'this'? Ans: 'this' refers to the current object means obj6. However, we can also use the obj6 instead of this. But, sometimes it might be very helpful.
let obj6 = {
  name: "Muhammad Babar",
  fathers_Name: "Muhammad Irshad",
  bio() {
    return `Hello! my name is ${this.name} and my father name is ${this.fathers_Name}`;
  },
};
console.log(obj6.bio()); //bio is a method inside the obj6;

/* assign Method */
let obj7 = { a: 1, b: 2, c: 3 };
let obj8 = { d: 4, e: 5, f: 6 };
let obj9 = Object.assign(obj7, obj8); //Copies elemnt from the source object(obj8) to target object(obj7)
console.log("Single Object=>", obj9);

/* Spread Operator. */
let obj10 = { g: "7", h: "8", i: "9" };
let obj11 = { j: "10", k: "11", l: "12" };
let obj12 = { ...obj10, ...obj11 };
console.log(obj12);

/* Keys */
console.log(Object.keys(obj12)); //Excpected output will be the keys obj12

/* values */
console.log(Object.values(obj12)); //Excpected output will be the values of obj12
function createbio(userName, userPassword) {
  let factoryObject = {
    user_Name: userName,
    user_Password: userPassword,
    introduceYourSelf() {
      return `My name is ${this.user_Name} and password is ${this.user_Password}`;
    },
  };
  return factoryObject;
}
const bio = createbio("Muhammad Farooq", "858574");
console.log(bio.introduceYourSelf());

/* Recursive function */
function addNumbers() {
  return console.log("Hello World!");
}
addNumbers();

/* function expressions with parameters*/
const multiplyValues = function (n) {
  return n * 5;
};
console.log(multiplyValues(8)); //Excpected output will be 40

/* function expression with name */
const factorial1 = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); // 3 * (3 - 1) = Output: 6
};
console.log(factorial1(3)); // 6

/* calling the function with validation */
let num = 0;
let myFunc;
if (num === 0) {
  myFunc = function (n) {
    return n * 9;
  };
}
console.log(myFunc(8));

function factorial2(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial2(n - 1);
  }
}
console.log(factorial2(4)); //It will call untill the condition reaches

/* function hoisting in function declaration */
console.log(functionDeclaration(5)); //Excpected output will be 25. There will be no error.
function functionDeclaration(n) {
  return n * n;
}

/* function hoisting in function expression */
// console.log(functionExpression(5));//There will be error.
// const functionExpression = function (n) {
//     return n * n;
// }

/* Rest or Default parameter */
function restfunction(n = "4") {
  return n / 2;
}
console.log(restfunction()); //If there is no parameter then default value will be used
console.log(restfunction(8)); //Provided value will be used
console.log("Hello World!");

/* Scope in Js */
let userEmail = "famuhammad907@gmail.com"; //This let variable is a global scope variable. Mean you can access everywhere in the file
if (true) {
  console.log(userEmail);
}

/* hoisting in function declaration */
console.log(multiply(8)); // We can access the output without any error.
function multiply(num) {
  return num * 8;
}

/* hoisting in function expression */
// console.log(multiply(8));// We can access the output without any error.
// const multiply = function (num) {
//     return num * 8;
// }

/* this in Node */
console.log(this); //Excpected output will be Emty object

/* this in Browser will give you global window object */

for (let index = 1; index < 4; index++) {
  if (index === 3) {
    console.log("Detected");
    break;
  }
  console.log(index);
}

/* High Order Functions */

/* for Of */
let myArray = [1, 32, 56, 55, 56, 44];

for (const keys of myArray) {
  console.log(keys);
}

let MyStr = "Hello World!";
for (const keys of MyStr) {
  if (keys === " ") {
    console.log(keys);
    break;
  }
  console.log(keys);
}

/********** DOM **********/

/* Generating Random Id for a div */
// const div = document.createElement("div");
// div.className = "divClass";
// div.id = Math.round(Math.random() * 100 + 1);
// console.log(div);

//******** Events *********

/* removeEventListener */
const userName = () => {
  console.log(`Muhammad Farooq`);
};
const helloBtn = document.getElementById("hello");
const worldBtn = document.getElementById("world");
helloBtn.addEventListener("click", userName);
helloBtn.removeEventListener("click", userName); //It will remove listner from the hellobtn

/* passing an abort signal */
const controller = new AbortController();
helloBtn.addEventListener(
  "click",
  () => {
    console.log(`Event is aborted`);
  },
  { signal: controller.signal }
);
controller.abort(); //It will also removes event listener

worldBtn.addEventListener("mouseenter", (e) => {
  console.log(e);
});

// *********** Block Code VS non-block Code *************

//Block Code means Sync Code---->Block the execution===> Each operation waits for last to complete
//Non-Block Code means Async code---->Doesn't Block the execution===> Does't wait for last opearation to complete

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3"); // Output will be 1,3,2. Because, setTimeout is using callback it goes to further procedure befor completing this next will execute.
