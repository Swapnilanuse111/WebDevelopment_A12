/*
non-primitive data types
        --non-primitive datatypes represents collections of values or multiple data 
        1.java script object
        2.java script array obaject
        3.functions
        4.NumberObject
        5.StringObject
        6.BooleanObject
*/

/*
4.NumberObject
Number(anyValue):number
new Number(anyValue):Number
*/
let number=10;
let numberObject=new Number(number); //boxing
console.dir(numberObject,typeof numberObject);

let numberPrimitiveValue=numberObject.valueOf();//un-boxing
console.log(numberPrimitiveValue,typeof numberPrimitiveValue);


/*
 5.StringObject
 String(anyValue):string
 new String(anyValue):string
*/
let StringPrimitiveData="JavaScript";
let StringObject=new String(StringPrimitiveData);//boxing
console.dir(StringObject);
let StringPrimitiveDate=StringObject.valueOf();
console.log(StringPrimitiveData,typeof StringPrimitiveData);

/*
6.BooleanObject

Boolean(anyValue):boolean
new Boolean(anyValue):Boolean
*/

let booleanPrimitiveData=true;
let BooleanObject=new Boolean(booleanPrimitiveData);//booxing
console.dir(BooleanObject)

let BooleanPrimitiveData=BooleanObject.valueOf();//unboxing
console.log(BooleanPrimitiveData,typeof BooleanPrimitiveData)


//non-primitive data types clarity
console.log(new Number(10),typeof new Number(10));
console.log(new String("JavaScript"),typeof new String("JavaScript"));
console.log(new Boolean(true),typeof new Boolean(true))