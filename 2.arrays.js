// it is a reference datatype

// ************** CREATION *************
// let a = [3, 5, 6, 7];
//          0  1  2  3 --> index from 0 to n-1
// console.log(a[3]);
// // all reference datatypes are called objects in JS
// console.log(typeof a);

// to check if it is am actual array , we can use:- 
// console.log(Array.isArray(a));

// ************** SOME USEFUL METHODS *************
// PUSH: it adds an element in the last and returns length of the array
// let b = a; // a & b points to the same memory location 
// b.push(9);
// a.push(9);
// a.push(9);
// let some = a.push(9); 
// console.log(a, some);

// POP: it removes an element from end of the array and returns length of the array
// a.pop();
// console.log(a);

// UNSHIFT: it adds an element in the start and returns length of the array
// a.unshift(6);
// console.log(a);

// SHIFT: it removes an element from start of the array and returns length of the array
// a.shift();

// SLICE: it returns the sliced array without changing original array
// let some = a.slice(2, 4);
// console.log(a, some);

// ************** HOW TO CLONE AN ARRAY? *************
// Method 1: using slice()
// let a2 = a.slice(); // it copies the element one by one internally, so if we change a2 it will not affect the a
// a2[0] = 4;
// console.log(a, a2);

// Method 2: using concat()
// let a2 = [].concat(a);
// console.log(a2);

// Method 3: using for loop OR for-of loop OR for-in loop
// let a2 = [];
// for(let i = 0; i < a.length; i++) {
//     a2[i] = a[i];
// }
// console.log(a, a2);

// Method 4: --------------- using SPREAD(...) operator
// let a2 = [...a]; // copies the array without changing original array
// a2[0] = 45; // this will not reflect to original array
// console.log(a, a2);


// ************** ARRAY DESTRUCTURING *************
// let a = [3, 5, 6, 7];
// let [var1, var2, var3, var4] = a;
// console.log(var1, var2, var3, var4);
// console.log(a);