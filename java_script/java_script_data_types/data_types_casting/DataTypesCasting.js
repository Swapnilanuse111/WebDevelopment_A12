/*
data types casting
    1.implicit data type casting
    2.explicit data type casting
*/
// 1.implicit data type casting[type coercion]
let firstNumber=25;
let secondNumber="5";
console.log(firstNumber+secondNumber,typeof (firstNumber+secondNumber));//255 string
console.log(firstNumber-secondNumber,typeof (firstNumber-secondNumber));//20 'number'
console.log(firstNumber*secondNumber,typeof (firstNumber*secondNumber));//125 'number'
console.log(firstNumber/secondNumber,typeof (firstNumber/secondNumber));//5 'number'

/*
2.explicit data type casting
    2.1.any data type into number data type
    2.2.any data type into string data type
    2.3.any data type into boolean data type
*/
/*
2.1.any data type into number data type
    2.1.1.Number(anyData):number
    2.1.2.parseInt(string):number
    2.1.3.parseFloat(string):number
*/
// 2.1.1.Number(anyData):number
console.log(firstNumber+Number(secondNumber),typeof (firstNumber+Number(secondNumber)));//30 'number'
let isTrainerAvailable=true;
console.log(Number(isTrainerAvailable),typeof Number(isTrainerAvailable));//1 'number'
let isTrainerEaten=false;
console.log(Number(isTrainerEaten),typeof Number(isTrainerEaten));//0 'number'
let employeeID="1701TYP";
console.log(Number(employeeID),typeof Number(employeeID));//NaN 'number'

// 2.1.2.parseInt(string):number
console.log(parseInt(employeeID),typeof parseInt(employeeID));//1701 'number'
let isSunRiseOnEast=true;
console.log(parseInt(isSunRiseOnEast),typeof parseInt(isSunRiseOnEast));//NaN 'number'

// 2.1.3.parseFloat(string):number
let academicCGPA="9.85CGPA";
console.log(parseFloat(academicCGPA),typeof parseFloat(academicCGPA));//9.85 'number'
let oilQuantity="10.5litres";
console.log(parseFloat(oilQuantity),typeof parseFloat(oilQuantity));//10.5 'number'
let isSunRiseOnWest=false;
console.log(parseFloat(isSunRiseOnWest),typeof parseFloat(isSunRiseOnWest));//NaN 'number'

/*
2.2.any data type into string data type
    2.2.1.String(anyData):string
    2.2.2.object.toString():string
*/
// 2.2.1.String(anyData):string
let mobileNumber=9597170631;
console.log(String(mobileNumber),typeof String(mobileNumber));//9597170631 string
let isACTurnedON=false;
console.log(String(isACTurnedON),typeof String(isACTurnedON));//false string

// 2.2.2.object.toString():string
console.log(mobileNumber.toString(),typeof mobileNumber.toString());//9597170631 string
console.log(isACTurnedON.toString(),typeof isACTurnedON.toString());//false string

/*
2.3.any data type into boolean data type
    2.3.1.Boolean(anyData):boolean
*/
// 2.3.1.Boolean(anyData):boolean
let username=undefined;
console.log(Boolean(username),typeof Boolean(username));