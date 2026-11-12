/*
non-primitive data types
non-primitive data types represents non-fundamental, user-defined, collection of values and properties
1.new Number(anyValue):NumberObject
2.new String(anyValue):StringObject
3.new Boolean(anyValue):BooleanObject
4.JavaScriptObjects
5.ArrayObjects
6.functions
*/

// 1.new Number(anyValue):NumberObject
let number=10;//primitive data type
let numberObject=new Number(number);//boxing[non-primitive value]
let numberPrimitiveValue=numberObject.valueOf();//un-boxing[primitive data type]
console.dir(numberObject,typeof numberObject);
console.log(numberPrimitiveValue,typeof numberPrimitiveValue);

// 2.new String(anyValue):StringObject
let string="ExampleWord";
let stringObject=new String(string);//boxing[non-primitive value]
let stringPrimitiveValue=stringObject.valueOf();//un-boxing[primitive value]
console.dir(stringObject,typeof stringObject);
console.log(stringPrimitiveValue,typeof stringPrimitiveValue);

// 3.new Boolean(anyValue):BooleanObject
let boolean=false;
let booleanObject=new Boolean(boolean);//boxing[non-primitive value]
let booleanPrimitiveValue=booleanObject.valueOf();//un-boxing[primitive value]
console.dir(booleanObject);
console.log(booleanPrimitiveValue,typeof booleanPrimitiveValue);

// 4.JavaScriptObjects
let shoeProduct={
    modelNumber:"SM625",
    brandName:"SparX",
    price:"₹2000.00"
}
let teeShirtProduct={
    modelNumber:"6525",
    brandName:"Jockey",
    price:"₹575"
}
console.dir(shoeProduct,typeof shoeProduct);
console.dir(teeShirtProduct,typeof teeShirtProduct);

// 5.ArrayObjects
let amazonCart=[shoeProduct,teeShirtProduct];
console.dir(amazonCart,typeof amazonCart);