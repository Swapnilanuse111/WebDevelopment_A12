// array objects functions
// 1.length(property):number
let studentNames=["HetPatel","Ranjith","Hanumanth","Siddanth"];
console.dir(studentNames.length);

// index retrieving functions
// 2.indexOf(element):firstOccurredElementIndex
// 3.indexOf(element,fromIndex):firstOccurredElementIndex
// 4.lastIndexOf(element):firstOccurredElementIndex
// 5.lastIndexOf(element,fromIndex):firstOccurredElementIndex

// 6.at(index):element
console.log(studentNames.at(2));

// subArray functions
// 7.slice(startIndex,endIndex):subArray
let rainbowColors=["violet","indigo","blue","green","yellow","orange","red"];
console.dir(rainbowColors.slice(0,4));

// 8.splice(startIndex,deleteCount):deletedSubArray
console.dir(rainbowColors.splice(4,3));

// array object to string object converting functions
// 9.join():string
// 10.join(seperator):string
console.log(rainbowColors.join(),typeof rainbowColors.join());
console.dir(rainbowColors.join("_"));
// 11.toString():string
console.dir(rainbowColors.toString().replaceAll(",","_"));

// 12.fill(value,startIndex,endIndex):filledArray
let randomArrayObject=new Array(10);
randomArrayObject.fill("Hello",0,3);
randomArrayObject.fill("Hey",3);
console.dir(randomArrayObject);

// 13.flat(1):flattenedArray
// 14.flat(depthness(Infinity)):flattenedArray
let nestedArray=[["A","B",["a","b",[97,98]]],["C","D",["c","d",[99,100]]],["E","F",["e","f",[101,102]]]];
console.dir(nestedArray);
console.dir(nestedArray.flat(Infinity));

// 15.push(elements):totalLength
// 16.pop():removedLastElement
let personName=["Iyer"];
personName.push("Venugopala");
personName.push("Muthuswamy");
personName.push("Chinnaswamy");
personName.push("Perambadur");
console.dir(personName);//["Iyer","Venugopala","Muthuswamy","Chinnaswamy","Perambudur"]
personName.pop();
personName.pop();
personName.pop();
personName.pop();
console.dir(personName);//["Iyer"]

// 17.unshift(elements):totalLength
// 18.shift():removedFirstElement
personName.unshift("Venugopala");
personName.unshift("Muthuswamy");
personName.unshift("Chinnaswamy");
personName.unshift("Perambadur");
console.dir(personName);//["Chinnaswamy","Muthuswamy","Venugopala","Iyer"]

// array objects higher order functions
// 19.sort():sortedArray
// 20.sort(callBackFunction):sortedArray
let numbers=[11,-1,21,34,7];
console.dir(numbers.sort());
console.dir(numbers.sort((firstElement,secondElement)=>secondElement-firstElement));

// 21.map(callBackFunction):mappedArray
let numbersArray=[1,2,3,4,5];
console.dir(numbersArray.map(number=>number*2));
console.dir(numbersArray.map(number=>number*3));
console.dir(numbersArray.map(number=>number**2));
console.dir(numbersArray.map(number=>number**3));
let circleRadius=[5,10,15,20,25];
console.dir(circleRadius.map(radius=>`${parseInt(radius**2*(22/7))}cm<sup>2</sup>`));
console.dir(circleRadius.map(radius=>`${parseInt(radius*2*(22/7))}cm`));

// 22.filter(callBackFunction):filteredArray
let numberArray=[1,2,3,4,5,6,7,8,9,10];
let oddNumbers=numberArray.filter(number=>number%2!=0);
console.dir(oddNumbers);
console.dir(numberArray.filter(number=>number%2==0));

// 23.find(callBackFunction):foundElement
let randomNumbers=[1000,45,10,34,67,54,32]
console.log(randomNumbers.find(randomNumber=>randomNumber<50));

// 24.findIndex(callBackFunctions):foundElementIndex
console.log(randomNumbers.findIndex(randomNumber=>randomNumber<50));

// 25.concat(elements):concatenatedArray
let firstRowStudentNames=["Het","Atharva","Kashinath"];
let secondRowStudentNames=["Siddanth","Hanumanth","Ranjith"];
console.dir(firstRowStudentNames.concat(secondRowStudentNames));

// 26.some(callBackFunction):boolean
console.log(firstRowStudentNames.some(studentName=>studentName.length==3));

// 27.every(callBackFunction):boolean
console.log(firstRowStudentNames.every(studentName=>studentName.length==3));

// 28.keys():ArrayIterator<indexes>
let speakerBrandNames=["JBL","bOAt","Marshall"];
for(let speakerBrandNamesIndex of speakerBrandNames.keys()){
    console.log(speakerBrandNamesIndex);
}

// 29.values():ArrayIterator<elements>
for(let speakerBrandNamesElement of speakerBrandNames.values()){
    console.log(speakerBrandNamesElement);
}

// 30.entries():ArrayIterator<index,element>
for(let speakerBrandNamesIndexElement of speakerBrandNames.entries()){
    console.log(speakerBrandNamesIndexElement);
}

// how many ways developer can iterate on array objects
// 1.for loop
for(studentNamesIndex=0;studentNamesIndex<=studentNames.length-1;studentNamesIndex++){
    console.log(studentNames.at(studentNamesIndex));
}
// 2.for of loop:values
for(let studentName of studentNames){
    console.log(studentName);
}
// 3.for in loop:keys:string
for(let studentNameIndex in studentNames){
    console.log(studentNames.at(studentNameIndex));
}
// 31.forEach():void
studentNames.forEach(studentName=>console.log(studentName));