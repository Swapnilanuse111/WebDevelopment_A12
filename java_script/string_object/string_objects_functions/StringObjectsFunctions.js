// string object functions
// 1.length(property):number
let waterBottleBrandName="MILTON";
console.log(`The characters count present in the string '${waterBottleBrandName}' : '${waterBottleBrandName.length}' characters.`);

// 2.charAt(index):character:string
for(let waterBottleBrandNameIndex=0;waterBottleBrandNameIndex<=waterBottleBrandName.length-1;waterBottleBrandNameIndex++){
    console.log(waterBottleBrandName.charAt(waterBottleBrandNameIndex));
}

// 3.charCodeAt(index):asciiValue
let metroStationGate="A";
console.log(metroStationGate.charCodeAt(0));

// 4.indexOf(searchString):firstOccurredStringIndex
// 5.indexOf(searchString,fromIndex):firstOccurredStringIndex
let language="malayalam";
console.log(language.indexOf("m"));
console.log(language.indexOf("a",2));
// 6.lastIndexOf(searchString):firstOccurredStringIndex
// 7.lastIndexOf(searchString,fromIndex):firstOccurredStringIndex
console.log(language.lastIndexOf("m"));

// substring functions
// 8.slice(startIndex,endIndex):subString
let acBrandName="BlueStar";
console.log(acBrandName.slice(0,4));//Blue
console.log(acBrandName.slice(4));//Star
console.log(acBrandName.slice(-8,-4));//Blue
console.log(acBrandName.slice(-4));//Star
// 9.substring(startIndex,endIndex):subString
console.log(acBrandName.substring(0,4));//Blue
console.log(acBrandName.substring(4));//Star
console.log(acBrandName.substring(-8,5));//BlueS
console.log(acBrandName.substring(5,-5));//BlueS
// 10.substr(startIndex,length):subString(deprecated)
console.log(acBrandName.substr(0,8));//BlueStar
console.log(acBrandName.substr(0,4));//Blue
console.log(acBrandName.substr(4));//Star
console.log(acBrandName.substr(0));//BlueStar

// string concatenation functions
// 11.concat(strings):concatenatedString
let firstName="Mayur";
let lastName="Mane";
console.log(firstName.concat(lastName));
// 12.padStart(maximumLength,fillString):concatenatedString
let courseName="Java";
console.log(courseName.padStart(8,"Core"));
// 13.padEnd(maximumLength,fillString):concatenatedString
let wish="Good";
console.log(wish.padEnd(14,"-AfterNoon"));

// whitespaces removing functions
// 14.trimStart():whiteSpaceRemovedString
let username=" vinay ";
console.log(username.trimStart());
// 15.trimEnd():whiteSpaceRemovedString
console.log(username.trimEnd());
// 16.trim():whiteSpaceRemovedString
console.log(username.trim());

// replacing functions
// 17.replace(oldString,newString):replacedString
let movieReview="He is an legendary actor and He proves in his movies that, Gravity does not exists.";
console.log(movieReview.replace("He","Mithun"));
// 18.replaceAll(oldString,newString):replacedString
console.log(movieReview.replaceAll("He","Mithun"));
let fruitName=" a p p l e ";
console.log(fruitName.trim().replaceAll(" ",""));//a p p l e

// validation functions:boolean
// 19.includes(searchString):boolean
// 20.includes(searchString,fromIndex):boolean
function getAccountName(enteredAccountName){
    let accountName="Sai Pawan Teja";
    if(accountName.includes(enteredAccountName)){
        return accountName;
    }
    return "No Accounts are matching.";
}
console.log(`Fetched Account Name : ${getAccountName("Sai")}`);
// 21.startsWith(searchString):boolean
// 22.startsWith(searchString,fromIndex):boolean
function validateGmailUsername(gmailUsername){
    let firstCharacterASCIIValue=gmailUsername.charCodeAt(0);
    if(firstCharacterASCIIValue>=48 && firstCharacterASCIIValue<=57){
        return "please generate valid email username, usernames usually will not start with numbers.";
    }
    return `${gmailUsername} is valid.`;
}
console.log(validateGmailUsername("mayur_mane@gmail.com"));
let instagramUsername="ayur_mane";
function getInstagramAccounts(instagramUsername){
    if(instagramUsername.startsWith("mayur")){
        return instagramUsername;
    }
    return "No instagram accounts matched.";
}
console.log(getInstagramAccounts(instagramUsername));
// 23.endsWith(searchString):boolean
// 24.endsWith(searchString,fromIndex):boolean
function validateEmailUsername(emailUsername){
    if(emailUsername.endsWith("@gmail.com") || emailUsername.endsWith("@outlook.com") || emailUsername.endsWith("@hotmail.com")){
        return `${emailUsername} is valid.`;
    }
    return `entered username '${emailUsername}' is missing @domain.`;
}
console.log(validateEmailUsername("yash@yahoo.co.in"));

// case changing functions
// 25.toLowerCase():lowerCasedString
let weatherStatus="Thunderstrom".toLowerCase();
if(weatherStatus=="sunny"){
    console.log("Apply Sunscreen");
}
else if(weatherStatus=="rainy"){
    console.log("Carry Umbrella");
}
else if(weatherStatus=="cloudy"){
    console.log("Wear Helmet and Drive.");
}
else if(weatherStatus=="thunderstrom"){
    console.log("Stay Home.");
}
else{
    console.log("Commands will be given only for rainy, sunny and cloudy.");
}
// 26.toUpperCase():upperCasedString
let subjectName="css".toUpperCase();//key[userInput]
switch(subjectName){
    default:console.log("Provide only WebTechnologies.");
    break;
    case "HTML":console.log("HyperText Markup Language");
    break;
    case "CSS":console.log("Cascading Style Sheets");
    break;
    case "JS":console.log("Java Script");
}

// 27.split():arrayObject
// 27.split(splitter):arrayObject
let frontEndTechnology="Web Development";
console.dir(frontEndTechnology.split());
let fullName="Vinay Kashinath Lakade";
console.dir(`The word count of '${fullName}' : ${fullName.split(" ").length}`);
let airConditionerBrandName="Blue Star";
console.dir(airConditionerBrandName.split(" "));

// 28.italics():<i>returnedString</i>
function validateNumberPositiveOrNegative(number){
    if(number>0){
        return `'${number}' is positive number.`.italics();
    }
    return `'${number}' is negative number.`.italics();
}
document.getElementById("validative_statement").innerHTML=`${validateNumberPositiveOrNegative(11)}`;

// 29.at(index):character:string
console.log(waterBottleBrandName.at(3));//T

// how many ways developer can iterate on string objects
let speakerBrandName="JBL";
// 1.for loop
for(speakerBrandNameIndex=0;speakerBrandNameIndex<=speakerBrandName.length-1;speakerBrandNameIndex++){
    console.log(speakerBrandName.charAt(speakerBrandNameIndex));
}
// 2.for of loop:values
for(let speakerBrandNameCharacter of speakerBrandName){
    console.log(speakerBrandNameCharacter);
}
// 3.for in loop:keys:string
for(let speakerBrandNameIndex in speakerBrandName){
    console.log(speakerBrandName.charAt(speakerBrandNameIndex));
}