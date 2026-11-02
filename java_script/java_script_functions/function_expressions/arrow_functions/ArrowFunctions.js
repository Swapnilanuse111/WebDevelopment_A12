// arrow functions
let arrowFunctions=()=>{
    for(printedTimes=1;printedTimes<=5;printedTimes++){
        console.log("ArrowFunctions.");
    }
}
arrowFunctions();

/*
arrow functions behaviors
    1.arrow functions without parameter and without return value
    2.arrow functions with parameter and without return value
    3.arrow functions with parameter and with return value
*/
// 1.arrow functions without parameter and without return value
let getDoubledNumber=_=>{
    let givenNumber=10;
    console.log("The Doubled Number of GivenNumber '"+givenNumber+"' is : "+givenNumber*2);
}
getDoubledNumber();

// 2.arrow functions with parameter and without return value
let getPoweredValue=(givenNumber,powerValue)=>console.log("The PoweredValue of GivenNumber '"+givenNumber+"' and PowerValue '"+powerValue+"' is : "+givenNumber**powerValue);
getPoweredValue(10,2);
getPoweredValue(3,3);

// 3.arrow functions with parameter and with return value
let getSquaredValue=givenNumber=>givenNumber**2;
document.getElementById("squared_number").textContent=getSquaredValue(window.prompt("Enter Number"));
document.getElementById("squared_number_logic").innerText=getSquaredValue;