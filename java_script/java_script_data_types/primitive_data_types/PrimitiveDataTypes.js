/*
JavaScript Data Types

1. What are Data Types?

Data types define the type of value a variable stores in JavaScript.

JavaScript data types are divided into two main categories:

Primitive Data Types

Non-Primitive (Reference) Data Types

2. Primitive Data Types

Primitive data types store simple, single values.

JavaScript has 7 primitive data types.

1. Number

Used to store integers and decimal numbers.
*/
let age = 21;
let price = 99.50;

console.log(age);
console.log(price);

//2. String
        //Used to store text inside quotes.

let name = "Swapnil";
let city = 'Pune';

console.log(name);
console.log(city);

//3. Boolean
        //Stores either true or false.

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

//4. Undefined
//A variable that has been declared but not assigned a value.

let result;

console.log(result); // undefined

//5. Null
        //Represents an intentional absence of a value.

let selectedValue = null;

console.log(selectedValue); // null

// 6. BigInt
// Used to represent integers larger than the safe integer range of the Number type.

let bigNumber = 12345678901234567890n;

console.log(bigNumber);

// 7. Symbol
    // Used to create unique identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false