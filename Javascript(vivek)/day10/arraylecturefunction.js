let name = ["Rohan", "Vivek", "Ajay"];

// for(let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// // 6. forEach()
// // Executes a provided function once for each array element.

// name.forEach(function(element) {
//     console.log(element);
// });

// // 7. map()
// // Creates a new array by modifying each element.

// let result = name.map(function(value) {
//     return value.toUpperCase();
// });

// console.log(result);

// // 8. forEach() vs map()
// // forEach() is used for iterating over an array and performing an action on each element, while map() is used to create a new array by transforming each element of the original array.

// // 9. filter()
// // Creates a new array containing only the elements that pass a certain condition.

// let resu = name.filter(function(value) {
//     return value.length > 4;
// });

// console.log(resu);

// let nums = [10, 15, 20, 25];
// let data = nums.filter(function(v) {
//     return v > 15;
// });

// console.log(data);


//9. find()
// Returns the first element that satisfies a provided testing function.

let nums2 = [10, 20, 30, 40];                       
console.log(nums2.find(x => x > 20));

console.log(nums2);

let num3 = nums2.find(function(y) {
    return y > 20;
});

console.log(num3);

let ult = name.find((value) => {
    return value.length > 4;
});

console.log(ult);

// 10. findindex()
// Returns the index of the first element that satisfies a provided testing function.

let name1 = ["Rohan", "Vivek", "Ajay", "Ajay"];

let result = name1.findIndex((value) => {
    return value === "Ajay";
});
console.log(result);

// 11. includes()
// checks whether an element exists

console.log(name1.includes("Ajay"));