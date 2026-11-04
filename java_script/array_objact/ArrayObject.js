/*
Array Objects
    1.array literals[elementOne,elementTwo...]
    2.empty array literals[]
    3.ArrayConstructor
        3.1.Array():ArrayObject
        3.2.Array(length):ArrayObject
        3.3.Array(elementOne,elementTwo):ArrayObject
    4.new ArrayConstructor
        4.1.new Array():ArrayObject
        4.2.new Array(length):ArrayObject
        4.3.new Array(elementOne,elementTwo):ArrayObject
*/

// 1.array literals[elementOne,elementTwo...]
let studentName="RahulGupta";
let studentNames=["Swapnil","Rahul","Manoj"];
console.dir(studentNames);

let trainerDetailsArray=["Yashwant","Rudhraa",950328239,false,false,"WebDevelopment","11LPA","QspidersHadapsar",["JagtapBuilding","PrabhakarPark","Gopalpatti","Hadapsar","Pune","Maharashtra","India","IN",4010101],"Goood"]
console.dir(trainerDetailsArray);


// 2.empty array literals[]
let myntraCart=[];
myntraCart[0]="Elgato Video Capture Device";
myntraCart[2]="WebCam";
console.dir(myntraCart);

/*
3.ArrayConstructor
        3.1.Array():ArrayObject
        3.2.Array(length):ArrayObject
        3.3.Array(elementOne,elementTwo):ArrayObject
*/

//3.1.Array():ArrayObject
let BagBrand=Array();
console.dir(BagBrand)

// 3.2.Array(length):ArrayObject

let rainbowColor=Array(7);
console.dir(rainbowColor);

// 3.3.Array(elementOne,elementTwo):ArrayObject

let classRoomNumbers=Array(1,2,3,4,5,6,7,8,9);
console.dir(classRoomNumbers);


/**
 4.new ArrayConstructor
        4.1.new Array():ArrayObject
        4.2.new Array(length):ArrayObject
        4.3.new Array(elementOne,elementTwo):ArrayObject
 */
// 4.1.new Array():ArrayObject
let mobileBrandNames=new Array();
console.dir(mobileBrandNames);

//   4.2.new Array(length):ArrayObject

let daysArray=new Array(7);
console.dir(daysArray);

// 4.3.new Array(elementOne,elementTwo):ArrayObject
let montsArray=new Array("January","February","March","April","May","June","July","August","Sapatember","Octomber","Novamber","December");
console.dir(montsArray);
