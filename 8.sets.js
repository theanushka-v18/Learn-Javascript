// ******************** Intro to Sets *********************
// it is an iterable
// it stores data
// sets also have its own methods
// no indexed based access
// order is not guranteed
// it contains only unique items (duplicates are not alllowed)

// ------------- Creation ---------------
let nums = new Set([1,2,3]);

// -------- to add values ----------
// nums.add(65);
// nums.add(65); // this is not allowed , it will not give any error but it will simply ignore the duplicate value
// const arr = ["item1", "item2"];
// nums.add(arr);
// nums.add(arr); // again this is not allowed as arr points to same memory address as of above added arr
// nums.add(["car", "bike"]);
// nums.add(["car", "bike"]); // now this is allowed because it has different memory address
// console.log(nums);

// ----------- to check element is present or not ----------
// we have has() method
// it returns boolean value
// let ans = nums.has(3);
// console.log(ans);

// *************** When to use Set() method? ********************
// when elements are unique
// let arr = [1, 2, 3, 4, 5,6 ,4, 3, 4,3,2]
// const set = new Set(arr); // this will not change original array
// console.log(set.size); // this will give the length/size of a Set
// console.log(set);
// console.log(arr);