// passing function in another function as a parameter

// function func1(ans) {            // here ans is a callback
//     console.log("I am func1");
//     ans();
// }

// function func2() {
//     console.log("I am func2");
// }

// let ans = func2;
// func1(() => {  
//     console.log("I am func2");
// });
// console.log(ans);
// func2();

// ---------------- function returning function ----------------
// function func1() {
//     function hello() {
//         console.log("Hello");
//     }
//     return hello;
// }

// let ans = func1();
// ans();