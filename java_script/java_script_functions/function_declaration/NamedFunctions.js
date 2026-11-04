/*
Function in JS:
    -- Functions are reusable blocks of code that perform
       a specific task.
    -- Functions are also used to provide functionality
       to HTML elements.
*/

// Named Functions

/*
Named Function Behaviours:

1. Named function without parameter and without return.
2. Named function with parameter and without return.
3. Named function with parameter and with return.
*/


// 1. Named Function without Parameter and without Return

function getMultipliedValue() {
    let numberOne = 10;
    let numberTwo = 5;

    let multipliedValue = numberOne * numberTwo;

    console.log("The multiplication of " + numberOne +
        " and " + numberTwo + " is " + multipliedValue);
}

getMultipliedValue();


// 2. Named Function with Parameter and without Return

function getSquaredNumber(number) {
    let squaredNumber = number ** 2;

    console.log("Squared Number is: " + squaredNumber);
}

getSquaredNumber(12);


// 3. Named Function with Parameter and with Return

function getMultipliedValueWithReturn(numberOne, numberTwo) {
    let multipliedValue = numberOne * numberTwo;

    return multipliedValue;
}

let result = getMultipliedValueWithReturn(10, 5);

console.log("Multiplication is: " + result);