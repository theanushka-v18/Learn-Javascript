// ********************** 1. forEach() Method *********************
// this method is use to iterate an array without changing the original array
// it takes a callback function
// callback function takes 2 parameter --> 1st is element & 2nd is index
// it returns nothing
// let a = [1, 2, 3, 4, 5];
// function print(num, index) {
//     console.log(`index is ${index} and number is ${num}`);
// }
// a.forEach(print);

// ********************** 2. map() Method *********************
// it takes a callback function
// callback function takes 2 parameter --> 1st is element & 2nd is index
// it returns an element in every iteration and creates a new array, add returned element in a new array
// if nothing returned then it will automatically adds undefined
// it doesn't modify the original array
// let a = [1, 2, 3, 4, 5];
// function print(num) {
    // console.log(`index is ${index} and number is ${num}`);
//     return num*2;
// }
// let newArr = a.map(print);
// newArr[3] = 9;
// console.log(newArr, a);

// ********************** 3. filter() Method *********************
// if we want filtered array then we can use this method
// it takes a callback function
// callback function takes 2 parameter --> 1st is element & 2nd is index
// it also creates a new array
// callback function of filter method always return a boolean value
// let a = [1, 3, 2, 6, 4, 8, 9];
// let newArr = a.filter((num)=> {
//     return num%2!==0;
// });
// console.log(newArr);

// ********************** 4. reduce() Method *********************
// it takes a callback function
// it only returns a single value
// let a = [1, 3, 2, 6, 4, 8, 9];
// let sum = a.reduce((accumulator, currVal) => {
//     return accumulator+currVal;
// }, initial value)

// console.log(sum);

// let's try on object
// let userCart = [
//     {productId : 1, productName : "Mobile", productPrice : 7000},
//     {productId : 1, productName : "Laptop", productPrice : 30000},
//     {productId : 1, productName : "LED TV", productPrice : 25000}
// ]

// let totalAmount = userCart.reduce((totalPrice, currProduct) => {
//     return totalPrice+currProduct.productPrice;
// }, 0);

// console.log(totalAmount);

// ********************** 5. sort() Method *********************
// it changes the original array
// if we sort array of numbers then JS takes those no. as strings

// ------- How strings sort in JS? ----------
//  By using ASCII code

// let a = [5, 9, 1200, 400, 3000];
// a.sort();
// console.log(a); // output:- [ 1200, 3000, 400, 5, 9 ]
// ------- How to get rid of this problem? -----------
// sort() method can take optional callback
// a.sort((a, b) => {
//     return a-b; // if (a-b) -> +ve then b,a order else a,b
// })
// console.log(a); // output:- [ 5, 9, 400, 1200, 3000 ]

// ********************** 6. find() Method *********************
// it also takes callback function
// it returns the first occurrence
// if not find then it returns undefined

// let users = [
//     {id : 1, name : "Anushka"},
//     {id : 2, name : "Mahak"},
//     {id : 3, name : "Babli"},
//     {id : 4, name : "Ramesh"},
//     {id : 5, name : "Shreya"},
// ]

// let myUser = users.find((user) => {
//     return user.id===3;
// })
// console.log(myUser.name);

// ********************** 7. every() Method *********************
// it also takes callback function
// it returns boolean
// if specifid condition applies on every element then it will return true, else false
// let userCart = [
//     {productId : 1, productName : "Mobile", productPrice : 7000},
//     {productId : 1, productName : "Laptop", productPrice : 30000},
//     {productId : 1, productName : "LED TV", productPrice : 25000}
// ]

// let ans = userCart.every((product) => {
//     return product.productPrice<30000;
// })
// console.log(ans);

// ********************** 8. some() Method *********************
// it also takes callback and return boolean
// if on any element condition satisfies then it will return true, else false
// let userCart = [
//     {productId : 1, productName : "Mobile", productPrice : 7000},
//     {productId : 1, productName : "Laptop", productPrice : 30000},
//     {productId : 1, productName : "LED TV", productPrice : 25000}
// ]

// let ans = userCart.some((product) => {
//     return product.productPrice>100000;
// })
// console.log(ans);

// ********************** 9. fill() Method *********************
// it changes the original array
// if I want to fill an array with some value then we can use this method
// let a = new Array(10); // declaring number of elements in array
// a.fill(6);
// console.log(a);

// let a = [1, 2, 3, 4, 5, 6];
// a.fill(value, startIndex, endIndex);
// a.fill(0, 2, 5); // endIndex will not include
// console.log(a);

// ********************** 10. splice() Method *********************
// this also changes the orignal array
// if you want to delete or insert something in an array then we can use this method

// let a = ["item1", "item2", "item3", "item4"];
// a.splice(startIndex, number of items you want to delete, number of itemms you want to insert);
// a.splice(1, 2, "inserted-item");
// console.log(a);