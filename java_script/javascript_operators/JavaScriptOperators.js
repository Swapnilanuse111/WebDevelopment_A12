/*
java script operators
    1.unary operators
    2.binary operators
        2.1.arithmetic operators
        2.2.relational operators
        2.3.logical operators
        2.4.assignment operators
    3.ternary operators
    4.string concatenation operator
*/
// 2.1.arithmetic operators[+ - * / % **]
let numberOne=10;
let numberTwo=5;
console.log(numberOne+numberTwo);//15
console.log(numberOne-numberTwo);//5
console.log(numberOne*numberTwo);//50
console.log(numberOne/numberTwo);//2
console.log(numberOne%numberTwo);//0
console.log(numberOne**numberTwo);//100000

// 2.2.relational operators[< <= > >= == === != !==]
let moonGravityValue=1.62;
let earthGravityValue=9.8;
console.log(moonGravityValue<earthGravityValue);//true
console.log(earthGravityValue>moonGravityValue);//true
console.log(earthGravityValue<=moonGravityValue);//false
console.log(earthGravityValue<=moonGravityValue);//false
console.log(moonGravityValue>=earthGravityValue);//false
console.log(earthGravityValue==moonGravityValue);//false
let firstNumber=100;
let secondNumber="100";
console.log(firstNumber==secondNumber);//true
console.log(firstNumber===secondNumber);//false
let hetMobileNumber=8329162689;
let ranjithMobileNumber="7057606847";
console.log(hetMobileNumber!=ranjithMobileNumber);//true
console.log(hetMobileNumber!==ranjithMobileNumber);//true

// 2.3.logical operators[&&(AND) ||(OR) !(NOT)]
let isStudentHavingPencil=false;
let isStudentHavingPen=true;
let isStudentHavingHallTicket=false;
console.log(isStudentHavingPencil && isStudentHavingPen && isStudentHavingHallTicket);//false
console.log(isStudentHavingHallTicket && isStudentHavingPen || isStudentHavingPencil);//false
console.log(!isStudentHavingHallTicket && isStudentHavingPen || isStudentHavingPencil);//true

// 2.4.assignment operators[+= -= *= /= %= **=]
let piValue=3.14;//assignment operation
piValue=22/7;//re-assignment operation
let salaryInLPA=4;
// compound assignment operators
console.log(salaryInLPA+=2);
console.log(salaryInLPA-=2);
console.log(salaryInLPA*=2);
console.log(salaryInLPA/=2);
console.log(salaryInLPA%=2);
console.log(salaryInLPA**=2);

// 1.unary operators[++operand operand++ --operand operand-- typeof operand delete operand]
let gameScore=0;//[0-->1]
console.log(++gameScore);//1
console.log(++gameScore);//2
console.log(++gameScore);//3
let playerLives=3;
console.log(--playerLives);//2
console.log(--playerLives);//1
console.log(--playerLives);//0
console.log(typeof playerLives);
console.log(typeof typeof typeof typeof typeof 5);

// 4.string concatenation operator
let firstWord="Hello";
let secondWord="World";
console.log(firstWord+" "+secondWord);//Hello World