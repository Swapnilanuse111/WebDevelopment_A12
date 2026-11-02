// anonymous functions
let anonymousFunction=function (){
    for(printedTimes=1;printedTimes<=5;printedTimes++){
        console.log("AnonymousFunction.");
    }
}

/*
anonymous function behaviors
    1.anonymous functions without parameters and without return value
    2.anonymous functions with parameters and without return value
    3.anonymous functions with parameters and with return value
*/
// 1.anonymous functions without parameters and without return value
let getQuotientValue=function (){
    let numerator=100;
    let deNumerator=50;
    let quotientValue=numerator/deNumerator;
    console.log("The Division of "+numerator+" and "+deNumerator+" is : "+quotientValue);
}
getQuotientValue();

// 2.anonymous functions with parameters and without return value
let getRemainderValue=function (numerator,deNumerator){
    console.log("The Division of "+numerator+" and "+deNumerator+" is : "+(numerator%deNumerator));
}
getRemainderValue(50,5);
getRemainderValue(33,5);
getRemainderValue(100,3);

// 3.anonymous functions with parameters and with return value
let getSquaredRadius=function (radius){
    return radius**2;
}
let getCircleArea=function (){
    return parseInt(3.142*getSquaredRadius(window.prompt("Enter Radius")))+"cm<sup>2</sup>";
}
document.getElementById("circle_area").innerHTML=getCircleArea();
document.getElementById("circle_area_logic").innerText=getCircleArea;