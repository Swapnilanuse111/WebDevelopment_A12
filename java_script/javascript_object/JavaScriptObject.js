
/*
JavaScript Objects

1. Object Literals
2. Object Constructors
   2.1 Object()
   2.2 new Object()
3. Constructor Functions
4. Class Declarations
*/

// 1. Object Literals

let trainerObject = {

    firstName: "Yashwanth",
    lastName: "Rudhra",
    mobileNumber: 9597170631,
    age: 28,
    isTrainerMarried: false,
    isTrainerAvailableONLINE: false,

    trainingCourse: "WebDevelopment",

    trainingCourseOrder: {
        1: "HTML",
        2: "CSS",
        3: "JavaScript",
        4: "ReactJavaScript",
        5: "ReactNative"
    },

    salary: "11LPA",
    jobLocation: "QspidersHadapsar",

    residentialAddress: {
        flatName: "WingA902",
        apartmentName: "DhanashreeAangan",
        area: "Handewadi",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        countryCode: "IN",
        postalCode: 411028
    },

    getFullName: function () {
        return `FullName: ${this.firstName} ${this.lastName}`;
    }
};

// Accessing complete object
console.dir(trainerObject);

// Accessing nested object
console.log(trainerObject.trainingCourseOrder[3]);

// Calling object method
console.log(trainerObject.getFullName());


// 2. Object Constructors

// 2.1 Samsung Mobile Object

let samsungMobileObject = new Object();

samsungMobileObject.brandName = "SAMSUNG";
samsungMobileObject.modelName = "GalaxyS21FE";
samsungMobileObject.color = "DarkGray";
samsungMobileObject.price = 27000;

samsungMobileObject.getFullDetails = function () {

    return `${this.brandName} Mobile Details<span><b>&middot;&middot;&middot</b><span>
    BrandName: ${this.brandName} |
    ModelName: ${this.modelName} |
    Color: ${this.color} |
    Price: ${this.price}`;

};

console.dir(samsungMobileObject);

document.getElementById("smasung_mobile_object_description").innerHTML =
    samsungMobileObject.getFullDetails();


// 2.2 Realme Mobile Object

let realMiMobileObject = new Object();

realMiMobileObject.brandName = "REALME";
realMiMobileObject.modelName = "Narzo70pro";
realMiMobileObject.color = "Pink";
realMiMobileObject.price = 17000;

realMiMobileObject.getFullDetails = function () {

    return `${this.brandName} Mobile Details<span><b>&middot;&middot;&middot</b><span>
    BrandName: ${this.brandName} |
    ModelName: ${this.modelName} |
    Color: ${this.color} |
    Price: ${this.price}`;

};

console.dir(realMiMobileObject);

document.getElementById("realmi_mobile_object_description").innerHTML =
    realMiMobileObject.getFullDetails();



// 3. Constructor Functions
function Mobile(brandName,modelName,color,price){
    this.brandName=brandName;
    this.modelName=modelName;
    this.color=color;
    this.price=price;
    this.getFullDetails=function(){
        return `${this.brandName} Mobile Details <span><b>&middot;&middot;&middot</b><span>
    BrandName: ${this.brandName} |
    ModelName: ${this.modelName} |
    Color: ${this.color} |
    Price: ₹${this.price}`;
    }
}
let oneplusMobileObject = new Mobile("Oneplus","NordCE6","BLACK",56000);
console.dir(oneplusMobileObject);
document.getElementById("one_pluse_mobile_object_description").innerHTML=oneplusMobileObject.getFullDetails();

let asusMobile=new Mobile("Assus","ROG53","BLACK",70000);
console.dir(asusMobile);
document.getElementById("asus_mobile_object_description").innerHTML=asusMobile.getFullDetails();


//4.class declaration[class ClassName{}]

class Student{
    //class properties
    studentName;
    rollNumber;
    age;
    enrolledCourse;
    constructor(studentName,rollNumber,age,enrolledCourse){
        this.studentName=studentName;
        this.rollNumber=rollNumber;
        this.age=age;
        this.enrolledCourse=enrolledCourse;
    }
    getStudentFullDetails(){
        return `${this.studentName}StudentDetails<span><b>&middot;&middot;&middot</b><span> StudentName:${this.studentName} | RollNumber:${this.rollNumber} | StudentAge:${this.age} | EnrolledCourse:${this.enrolledCourse}`;
    }
}
class SwapnilStudnt extends Student{

}
class AvinashStudent extends Student{

}
let swapnilStudent=new SwapnilStudnt("SwapnilAnuse",102,23,"PYTHON");
console.dir(swapnilStudent);
document.getElementById("swapnil_student_object_description").innerHTML=swapnilStudent.getStudentFullDetails();
let avinashStudent=new AvinashStudent("AvinashTayade",101,20,"HACKING");
console.dir(avinashStudent);
document.getElementsById("avinash_student_object_description").innerHTML=avinashStudent.getStudentFullDetails();