// ******************** Intro to Maps *********************
// it is an iterable 
// store data in ordered fashion
// it stores key-value pair like objects
// duplicate keys are not allowed like objects

// ---------------- difference between objects and maps ------------------
//   OBJECT               |         MAPS
// it can only have       |   here you can use anything as key        
// string or symblo key.  |   like array, number, strings, etc.        

// ------------- Creation ------------
// const person = new Map();

// ------- to set key-value -----------
// we have set() method --> objectName.set("key", "value");
// person.set("fname", "Anushka");
// person.set("lname", "Verma");
// person.set("gender", "female");
// person.set("age", "21");
// person.set(1, "one");
// console.log(person);

// ------- to get value -----------
// we have get(key) method
// console.log(person.get("fname"));

// ------- to get all keys -----------
// we have get(key) method
// console.log(person.keys());


// --------- E.g to set array as key -----------
// person.set([1, "name"], ["one", "Anushka"])
// console.log(person);

// --------- E.g to set object as key -----------
// const user = {
//     id : 1,
//     fname : "Anushka"
// }
// const person = new Map();
// person.set(user, {age:8, "gender":"female"});
// console.log(user, person);