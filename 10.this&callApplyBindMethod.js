// ********************** THIS Keyword *************************
// the object that invokes (calls) the function where “this” is used.
// 'this' refers to different objects depending on how it is used
// global object of JS is window
// 'this' === 'window'

// "use strict"; // in strict mode 'this' inside function prints undefined

// console.log(this); // it prints 'window' object

// function func() {
//     console.log(this); // it will also print 'window' object
// }

// func();

// ********************** Call() Method *************************
// Call is a function that helps you change the context of the invoking function
// it helps you replace the value of this inside a function with whatever value you want

// let user1 = {
//     name : "kuki",
//     age : 19,
//     about : function(msg, arr) {
//         console.log(this.name, this.age, msg, arr);
//     }
// }

// let user2 = {
//     name : "Anushka",
//     age : 21
// }
// let msg = "Hello";
// let arr = [1, 2, 3]; // ypu can also pass an array

// user1.about.call(user2, msg, arr); // I want to call about method for user2 & you can also pass arguments to it

// ********************** Apply() Method *************************
// this method is very similar to the call method but the only difference is that you can pass argumemts as an array

// let user1 = {
//     name : "kuki",
//     age : 19,
//     about : function(msg, arr) {
//         console.log(this.name, this.age, msg, arr);
//     }
// }
// let user2 = {
//     name : "Anushka",
//     age : 21
// }
// let msg = "Hello";
// let arr = [1, 2, 3];
// user1.about.apply(user2, [msg, arr]); // here msg & arr are passed as an array

// ********************** Bind() Method *************************
// The bind function creates a copy of a function with a new value to the this present inside the calling function.
// The bind function then returns a new function that consists of a new context to the this variable present inside the calling function
// now the returned function can be executed later  with the arguments
