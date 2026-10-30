/*
Function In JS
    --Functions Are Reusable Block Of Code That Performs Specific Task
    and aslo function is used to provide the functionalatiy to the html elements
*/

//named functions
function nammedFunction(){
    for(printedTimes=1;printedTimes<=5;printedTimes++){
        console.log("Named Function")
    }
}
nammedFunction();
console.log(nammedFunction())

/*
named Function behaviours
    1.named function without parameter and withot return
    2.named function with parameter and without return
    3.named function with parameter and with return
    */
//    1.named function without parameter and withot return
function getMultipliedValue(){
    let numberOne=10;
    let numberTwo=5;
    let multipliedValue=numberOne*numberTwo;
    console.log("The Multiplication of'"+numberOne+"'and'"+numberTwo+"'is'"+multipliedValue)

}
getMultipliedValue()

//2.named function with parameter and without parameter

function getSqueredNumber(number){
    let squredNumber=number**2;
    console.log(squredNumber)
}
getSqueredNumber(12);


//3.named function with return and with return value
