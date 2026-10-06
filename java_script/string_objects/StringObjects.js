/*
java script strings
    1.string literals[" " | ' ']:string
    2.String(anyData):string
    3.new String(anyData):StringObject
    4.template literals[` `]:string
*/
// 1.string literals[" " | ' ']
let courseName="Web'D'evelopment";
console.log(courseName,typeof courseName);//WebDevelopment string
let currentTechnology='Java"S"cript';
console.log(currentTechnology,typeof currentTechnology);//Java"S"cript string

// 2.String(anyData):string
let mobileNumber=9597170631;
let mobileNumberString=String(mobileNumber);
console.log(mobileNumberString,typeof mobileNumberString);//9597170631 string

// 3.new String(anyData):StringObject
let stringObject=new String("JavaScript");
console.dir(stringObject);

// 4.template literals[` `]:string
let webDevelopmentPurpose=`The process of
designing and developing front-end of the
web-pages by using HTML, CSS, JavaScript and React-JavaScript`;
console.log(webDevelopmentPurpose,typeof webDevelopmentPurpose);

/*
string in-terpolation
${variableName | functionName | objectReferenceVariableName | objectPropertyName | ConstructorName}
*/
let getSquaredNumber=number=>`The Squared Number of ${number} is <b>${number**2}</b>`;
document.getElementById("squared_number_value").innerHTML=getSquaredNumber(25);

let colorName=window.prompt("Enter ColorName");
let carName=window.prompt("Enter CarName");
document.getElementById("lovable_statement").innerHTML=`I love <span style="color:${colorName};">${colorName}</span> color <span style="color:${colorName};">${carName}</span> car`;

// is string objects mutable or im-mutable
let webTechnology="html";
console.log(webTechnology.toUpperCase());
console.log(webTechnology);