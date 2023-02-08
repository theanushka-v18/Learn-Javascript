// a block of code used to reuse again and again without writing code again
// resuable

// ----------------- 1. Simple functions ------------------
// declaration  --> we have to call function to run 
// function print(a, b) { // here a & b are parameters
//     console.log("Hello");
//     console.log(a+b);
// }

// function call
// print(2, 5); // here 2 & 5 are arguments

// NOTE:- undefined + undefined = NaN
// let a, b;
// console.log(a+b);

// ----------------- 2. Function expression ------------------
// let a = 9; // expression

// these functions treated like a variable
// let func = function() {
//     console.log("Hello");
// }

// func();

// ----------------- 3. Arrow functions ------------------
// this also treated like any other variable
// let func = () => {
//     console.log("Hello");
// }

// let func = () => console.log("one liner arrow function");
// func();

// ----------------- Function inside function ------------------
// function app() {
//     const myfunc = () => {
//         console.log("Hello myFunc");
//     }
//     const add = (n1, n2) => {
//         return n1+n2;
//     }
//     const product = (n1, n2) => n1*n2;
//     console.log("app");
//     myfunc();
// }

// app();

// ----------------- Default parameters ------------------
// function sum(a, b=0) {
//     console.log(a+b);
// }
// sum(3);

// ----------------- Rest parameters ------------------
// rest parameters should be the last parameter
// it takes all the values in an array
// function sum(a,b, ...c) {
//     console.log(a+b);
//     console.log(c);
// }
// sum(2,5, 7, 8, 6, 4, 6, 0, 7, 8);

// ----------------- Param destructuring ------------------
// mostly used with React and with objects
// let person = {
//     fname : "Anushka",
//     lname : "Verma",
//     gender : "female",
//     age : 21
// }

// let {fname, lname, gender, age} = person; // normal object destructuring


// function print({fname, lname, gender, age}) { // in function declaration we have to destructure object
//     console.log(fname);
//     console.log(lname);
//     console.log(gender);
//     console.log(age);
// }

// print(person); // in function call we have to pass an object of which we want to destructure