// immediately invoked functions
(function (){
    for(printedTimes=1;printedTimes<=5;printedTimes++){
        console.log("ImmediatelyInvokedFunctions.");
    }
})();

/*
immediately invoked functions behaviors
    1.immediately invoked functions without parameters and without return value
    2.immediately invoked functions with parameters and without return value
    3.immediately invoked functions with parameters and with return value
*/
// 1.immediately invoked functions without parameters and without return value
(function (){
    let numberOne=10;
    let numberTwo=5;
    console.log("The Addition of NumberOne '"+numberOne+" and NumberTwo '"+numberTwo+" is : "+(numberOne+numberTwo));
})();

// 2.immediately invoked functions with parameters and without return value
((base,height)=>console.log("The AreaOfRightAngledTriangle of Base '"+base+"' and Height '"+height+"' is : "+0.5*base*height))(10,5);

// 3.immediately invoked functions with parameters and with return value
let squaredNumber=(givenNumber=>givenNumber**2)(window.prompt("Enter Number"));
document.getElementById("squared_number").textContent=squaredNumber;