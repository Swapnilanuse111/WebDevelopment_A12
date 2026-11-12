// java script variables
/*
syntax : variable-declaration-keywords identifier=literals;
de-coded syntax : var let const variableName=data | value;
*/
// differences between var let const
// case-study-one:declaration and initialization[var let const]
var studentRollNumber=101;
console.log(studentRollNumber);
let projectorBrandName="EPSON";
console.log(projectorBrandName);
const employeeID="TYP1701";
console.log(employeeID);

// case-study-two:re-initialization[var let]
studentRollNumber=105;
console.log(studentRollNumber);
projectorBrandName="SONY";
console.log(projectorBrandName);
// employeeID="TYP1710";
console.log(employeeID);

// case-study-three:only-declaration[var let]
var bagBrandName;
console.log(bagBrandName);
let classRoomNumber;
console.log(classRoomNumber);
const earthPosition=3;

// case-study-four:re-declaration[var]
var bagBrandName="WILDCRAFT";
console.log(bagBrandName);
// let classRoomNumber="RoomNo:08";
console.log(classRoomNumber);
// const earthPosition=7;
console.log(earthPosition);

// case-study-five:block-scoped-variable[let const]
{
    var mobileBrandName="SAMSUNG";
    let mobilePrice=21000;
    console.log(mobilePrice);
    const mobileType="SmartMobile";
    console.log(mobileType);
}
console.log(mobileBrandName);

// case-study-six:function-scoped-variable[var let const]
function toCheckFunctionScopedVariables(){
    var trainerName="Y";
    let trainerSubject="WD | CJ";
    const trainerID="TYP1701";
    console.log(trainerName);
    console.log(trainerSubject);
    console.log(trainerID);
}
toCheckFunctionScopedVariables();

// case-study-seven:variable-hoisting[var]
console.log(speakerBrandName);//utilization
var speakerBrandName="JBL";//declaration and initialization
// console.log(speakerPrice);//utilization
let speakerPrice=35000;//declaration and initialization
// console.log(speakerModelID);//utilization
const speakerModelID=35000;//declaration and initialization