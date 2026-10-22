
/*
========================================
   JAVASCRIPT NON-PRIMITIVE DATA TYPES
========================================

Non-primitive data types are used to store
collections of values or complex data.

Common examples:
1. Object
2. Array
3. Function
4. Date
5. Map
6. Set

*/

// ========================================
// 1. OBJECT
// ========================================

// An object stores data in key-value pairs.
// We can access values using their keys.

// Example:

let student = {
    name: "Swapnil",
    age: 21,
    city: "Pune"
};

console.log(student);
console.log(student.name);
console.log(student.age);


// ========================================
// 2. ARRAY
// ========================================

// An array stores multiple values in one variable.
// Array indexing starts from 0.

// Example:

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);


// ========================================
// 3. FUNCTION
// ========================================

// A function is a reusable block of code.
// It performs a particular task.
// We execute a function by calling its name.

// Example:

function greet() {
    console.log("Hello, Swapnil!");
}

greet();


// ========================================
// 4. DATE OBJECT
// ========================================

// The Date object is used to work with
// dates and times.

// Example:

let today = new Date();

console.log(today);


// ========================================
// 5. MAP
// ========================================

// Map stores data in key-value pairs.
// Keys can be of different data types.
// Use set() to add values and get() to access them.

// Example:

let marks = new Map();

marks.set("Math", 85);
marks.set("English", 90);

console.log(marks);
console.log(marks.get("Math"));


// ========================================
// 6. SET
// ========================================

// Set stores unique values.
// Duplicate values are automatically removed.

// Example:

let numbers = new Set([10, 20, 20, 30, 40]);

console.log(numbers);


// ========================================
// CHECKING TYPES
// ========================================

// typeof checks the type of a value.
// Arrays return "object" with typeof.
// Array.isArray() checks whether a value is an array.

console.log(typeof student);
console.log(typeof fruits);
console.log(typeof greet);

console.log(Array.isArray(fruits)); // true
