// Sorting numbers in ascending order using the sort() method in JavaScript:

let nums = [50, 10, 5, 40, 20];

nums.sort(function(a, b) {
    return a - b; // For ascending order
});

console.log(nums); // Output: [5, 10, 20, 40, 50]

// Sorting numbers in descending order using the sort() method in JavaScript:

nums.sort(function(a, b) {
    return b - a; // For descending order
});
console.log(nums); // Output: [50, 40, 20, 10, 5]

// slice()

// Copies a portion of an array without changing the original array.

// start at index 0
// stop before index 2

let name = ["Rohan", "Vivek", "Ajay", "raja"];

console.log(name);

let result = name.slice(0, 2);

console.log(result);

// splice()

// can add, remove, or replace elements

// remove element

// 1 start from index 1 (Vivek)
// 2 remove 2 elements (Vivek and Ajay)

name.splice(1, 2);

console.log(name); // Output: ["Rohan", "raja"]