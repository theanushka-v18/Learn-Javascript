// ********************* VARIABLES ***********************
// var a = 5; // declaration and initialization in the same line
// var a = 8; // redeclaration and reinitialization is allowed
// a = 43; // change of variable is allowed
// let b = 5; // declaration and initialization in the same line
// let b = 6; // redeclaration is not allowed but reinitialization is allowed
// b = 4; // change of variable is allowed
// const c = 5; // declaration and initialization in the same line (must)
// const c = 9; // redeclaration and reinitialization is not allowed
// c = 8; // change of variable is not allowed as this is a constant variable

// ********************* STRINGS & IT'S METHODS ***********************
// let str = "Anushka"; // original string will not change as these are immutable
// let trimmedStr = str.trim(); // remove white spaces from start and end
// let upperCase = str.toUpperCase();
// let lowerCase = str.toUpperCase();
// let sliced = str.slice(2,5); // ending index will not be included
// let msg = " is a good girl";
// let concatStr = str.concat(msg);
// let bool = str.includes("N") // this will return a boolean value
// console.log(str);
// console.log(typeof bool); // typeof operator tells us datatype of a value

// ********************* DATATYPES ***********************
// Primitive --> number, string, boolean, undefined, null, bigint, symbol
// Non primitive --> Object
// NaN is a property --> Not a Number

// undefined vs not defined
// undefined --> variable present in memory but not initialized
// not defined --> variable is not present in memory

// ********************* TEMPLATE STRINGS ***********************
// let a = 2;
// let b = 5;
// let sum = a + b;
// console.log("The sum of " + a + " and " + b + " is " + sum);
// console.log(`The sum of ${a} and ${b} is ${sum}`);

// ********************* OPERATORS ***********************
// Arithmetic --> +, -, *, /, %
// comparison --> <, >, <=, >=, ==(equal to), ===(strict equal to__checks datatype also), !=, !==
// boolean --> true, false
// NOTE:- there are some more operators

// ********************* TRUTHY & FALSY VALUES ***********************
// falsy values --> "", 0, false, null, undefined
// except these values all are truthy values

// ********************* CONDITIONAL STATEMENTS ***********************
// if, it-else, nested if-else, switch, ternary, AND(&&), OR(||)
// let ans = (8 > 42) ? "true" : "false"; // ternary operator
// console.log(ans);
// AND(&&) --> gives true iff both conditions are true else false
// OR(||) --> gives true if either one of the condition is true

// ********************* CONTROL STATEMENTS ***********************
// while loop, do-while, for, (for-of, for-in) --> will cover after arrays
// already know