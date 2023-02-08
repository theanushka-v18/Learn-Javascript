// to store real world data, we use objects
// it stores key-value pair
// object don't have an index

// ******************** CREATION **************************
// also called object literal
// let person = {
//     name : "Anushka",
//     age : 21,
//     course : "BCA",
//     college : "Allenhouse Business School",
//     marks : 66
// }

// we can access values by using dot notation
// console.log(person.name);
// console.log(person.age);

// add new key-value pair 
// keys always are in string
// let key = "course-name"; // for this kind of key to store we have to use bracket notation
// person[key]= "BCA";
// console.log(person);

// ******************** HOW TO ITERATE OBJECTS? **************************
// Method 1: using for-in loop
// for(let key in person) {
//     console.log(key + " : " + person[key]);
// }

// Method 2: using Object.keys(objectName)
// this above function returns array which contains keys 
// for(let key of Object.keys(person)) {
//     console.log(person[key]);
// }

// ******************** COMPUTED PROPERTIES **************************
// const key1 = "objkey1";
// const key2 = "objkey2";

// const val1 = "myVal1";
// const val2 = "myVal2";

// let obj = {
//     [key1] : val1,
//     [key2] : val2
// }

// console.log(obj);

// ******************** SPREAD operator in objects **************************
// it is used to copy one object to another object
// let obj1 = {
//     key1 : "val1",
//     key2 : "val2"
// }

// let obj2 = {
//     key3 : "val3",
//     key4 : "val4"
// }

// Method 1: using spread operator
// let newObj = {...obj1, ...obj2};
// newObj.key1 = "changed";
// console.log(obj1);
// console.log(newObj);

// Method 2: ----------- using object.assign() ------------
// const newObj = Object.assign(obj1, obj2);
// console.log(newObj);

// ******************** OBJECT DESTRUCTURING **************************
// variable name should be same because it will matches the key in an object
// let album = {
//     singer : "Nick Jonas & Jonas Brothers",
//     song : "sucker"
// }

// let {singer, song} = album;
// console.log(singer, song);

// ******************** OPTIONAL CHAINING **************************
// if key exist then give its result otherwise returns undefined
// optional chaining symbol is (?.)
// let user = {
//     fname : "Anushka",
//     address : {HNo : 415}
// }

// console.log(user?.fname);
// console.log(user?.address?.HNo);

// ******************** CREATE YOUR OWN METHODS **************************
// methods --> functions inside object
// let person = {
//     fname : "Anushka",
//     age : 21,
//     about : function() {
//         console.log(this.fname + " is a good girl");
//     }
// }

// person.about();