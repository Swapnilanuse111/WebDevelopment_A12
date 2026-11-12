/*
primitive data types
primitive data types represents a fundamental or basic or primitive single value.
1.number
2.string
3.boolean
4.undefined
5.null
6.bigint
7.symbol
*/
// 1.number
let countOfEggs=5;
console.log(countOfEggs,typeof countOfEggs);
let academicCGPA=8.67;
console.log(academicCGPA,typeof academicCGPA);

// 2.string
let studentName="Atharvaa";
console.log(studentName,typeof studentName);
let enrolledCourseName='JavaFullStack';
console.log(enrolledCourseName,typeof enrolledCourseName);

// 3.boolean
let isAtharvaaPresent=false;
console.log(isAtharvaaPresent,typeof isAtharvaaPresent);
let isAtharvaaAbsent=true;
console.log(isAtharvaaAbsent,typeof isAtharvaaAbsent);

// 4.undefined
let laptopBrandName;//declaration
console.log(laptopBrandName,typeof laptopBrandName);
let mobileBrandName=undefined;
console.log(mobileBrandName,typeof mobileBrandName);

// 5.null
let username=null;
console.log(username,typeof username);
let password=null;
console.log(password,typeof password);

// 6.bigint
let phonePeTransactionID=90071992547409910n;
console.log(phonePeTransactionID,typeof phonePeTransactionID);
let googlePayTransactionID=BigInt(9007199254740993n);
console.log(googlePayTransactionID,typeof googlePayTransactionID);

// 7.symbol
const employeeID=Symbol("employeeID");
let employeeDetails={
    employeeID:1701,
    [employeeID]:1702
}
console.log(employeeDetails.employeeID);
console.log(employeeDetails[employeeID]);

// primitive data-types clarity
console.log(10==10);
console.log(10.5==10.5);
console.log("Java"=='Java');
console.log(true==false);
console.log(undefined==null);
console.log(phonePeTransactionID==googlePayTransactionID);
console.log(Symbol("username")==Symbol("username"));