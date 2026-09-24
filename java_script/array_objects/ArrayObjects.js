/*
array objects
    1.array literals [elements]
    2.empty array literals []
    3.ArrayConstructors
        3.1.Array():ArrayObject
        3.2.Array(length):ArrayObject
        3.3.Array(elements):ArrayObject
    4.new ArrayConstructors
        4.1.new Array():ArrayObject
        4.2.new Array(length):ArrayObject
        4.3.new Array(elements):ArrayObject
*/
// 1.array literals [elements]
let firstRowStudentNames=["Siddhant","Sai Mozar"];
console.dir(firstRowStudentNames);
let trainerInformations=["Yashwanth","WebDevelopment","QspidersHapdapsar","15LPA",false,true,9597170631,289704044331,"YAZPK1411Y",["WingA902","DhanashreeAangan","Handewadi","Pune","Maharashtra",411028,"IN"]];
console.dir(trainerInformations);
console.log(trainerInformations[9][1]);

// 2.empty array literals []
let amazonCart=[];
amazonCart[0]="Shoe";
amazonCart[1]="Mobile";
console.dir(amazonCart);

/*
3.ArrayConstructors
    3.1.Array():ArrayObject
    3.2.Array(length):ArrayObject
    3.3.Array(elements):ArrayObject
*/
// 3.1.Array():ArrayObject
let flipkartMinutesCart=Array();
console.dir(flipkartMinutesCart);
// 3.2.Array(length):ArrayObject
let interviewCandidates=Array(10);
console.dir(interviewCandidates);
// 3.3.Array(elements):ArrayObject
let speakerBrandNames=Array("bOAt","JBL","SONY","Marshall");
console.dir(speakerBrandNames);

/*
4.new ArrayConstructors
    4.1.new Array():ArrayObject
    4.2.new Array(length):ArrayObject
    4.3.new Array(elements):ArrayObject
*/
// 4.1.new Array():ArrayObject
let amazonNowCart=new Array();
console.dir(amazonNowCart);
// 4.2.new Array(length):ArrayObject
let amazonProducts=new Array(10);
console.dir(amazonProducts);
// 4.3.new Array(elements):ArrayObject
let bagBrandNames=new Array("WildCraft","SkyBags");
console.dir(bagBrandNames);

// is array objects mutable or im-mutable
firstRowStudentNames[0]="SiddanthGade";
console.dir(firstRowStudentNames);