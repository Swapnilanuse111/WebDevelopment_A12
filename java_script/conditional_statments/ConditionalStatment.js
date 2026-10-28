/*
    Conditional Statment
        1.if statment
        2.if else statment
        3.else if lader statment
        4.switch case statment
        */
       
       
       // 1.if statment
       //          ---if statement is a type of conditional statement which perform one operation based on checking one condition.
       
       let GivenNumber=11;
       if(GivenNumber>10){
           console.log("The Given Number'"+GivenNumber+"'Is Positive NUmber")
        }
        
        //2.if else statment
//          ----whenever devloper want to perform the ulternate opration based on checking one contions that condtional statment we called as if else
    
    let Number=1;
    if(Number>0){
        console.log("The Given '"+Number+"'Is Positive Number");
    }
    else{
        console.log("The Given'"+Number+"'Is Negative NUmber")
    }

    
// 3.else if lader statment
//      --Whenever Developer Want To Perform On Appropreate Operation By Checking Multiple Condition
let puneWetherStatus="sunny";
if(puneWetherStatus=="sunny")
{
    console.log("Please Weare The Sun Glassses");
}
else if(puneWetherStatus=="Cloudy")
{
    console.log("Plese Ware The Helmet");
}
else if(puneWetherStatus=="Ranny")
{
    console.log("Please Weare The Rain-")
}


// 4.switch case statment


let ChoesTheMonthNumber=1;
switch(ChoesTheMonthNumber){
    case 1:console.log("January");
    break;
    case 2:console.log("Febuary");
    break;
    case 3:console.log("March");
    break;
    case 4:console.log("April");
    break;
    case 5:console.log("May");
    break;
    case 6:console.log("June");
    break;
    case 7:console.log("Julay");
    break;
    case 8:console.log("August");
    break;
    case 9:console.log("Sapatember");
    break;
    case 10:console.log("Octmber");
    break;
    case 11:console.log("Novehember");
    break;
    case 12:console.log("December");
}