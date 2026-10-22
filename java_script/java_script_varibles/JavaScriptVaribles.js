/*
JavaScript Varibles
---javascript varibles are the memory block which store data or value[literals]

syntax:varible-declartion-keyword identifiers=literals

re-initilization syntax:identifiyers=literals

*/

//case-study-one:declaration and initilization[var let const]
var StudentName="Swapnil"   //declaration
console.log(StudentName); //utilization
let projectName="Crop Decise Detection" //Declaration
console.log(projectName)    //utilization


//case-study-two:re-initilization[var let]

StudentName="Rahul"     //re-initilization
console.log(StudentName);

projectName="Farmkart"
console.log(projectName)

//case-study-three:only-declaration[var let]
var classRoom=2;//declaration
let employeeName="swapnil";//declaration
// const earthPosition; ----it will gives the error becous the by using the const we need to initilization and declaration
const earthPositioin=3;//delaration and initiliation


//case-study-four:re-declaration and initilization[var]
var classRoom=7;
// let employeeName="abcd"
// const earthPositioin=20;


//case-study-five:block-scoped varible[let const]
{
    var LaptopName="Assus"
    let LaptopModel="TUF-F17"
    console.log(LaptopModel)
    const LaptopRam="8GB"
    console.log(LaptopRam)
}
console.log(LaptopName)  //this is not block scop varible because we can acess outside the block 

//case-study-six:function-scooped varibles[var let const]
function toCheckFunctionScopedVaribel(){
    var LaptopName="Assus"
    console.log(LaptopName)
    let LaptopModel="TUF-F17"
    console.log(LaptopModel)
    const LaptopRam="8GB"
    console.log(LaptopRam)
}
toCheckFunctionScopedVaribel()


//case-study-seven :varible-hoisting[var]
console.log(Name)
var Name='swapnil'
// console.log(YT)
// let YT=10

// console.log(ABC)
// const Teams=11