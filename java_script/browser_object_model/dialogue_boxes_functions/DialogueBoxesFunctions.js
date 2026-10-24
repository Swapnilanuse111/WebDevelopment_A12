/*
Dialouge boxes functions
    1.alert(alertMessage):void
    2.confirm(confirmMessage):boolean
    3.prompt(promtMessage):string | null
    */
   //    1.alert(alertMessage):void
   let alertStatus=window.alert("WebPage is harmful do Not Open");
   console.log("AlertStatus :"+alertStatus)
   
   
   //    2.confirm(confirmMessage):boolean
   let confirmStatus=window.confirm("Do You Really Want to Proceed This page");
   console.log("Coonfirm Meaage:"+confirmStatus)


   //    3.prompt(promtMessage):string | null
let emailUsername=window.prompt("Enter Your UserName");
console.log("EnmailUsername:"+emailUsername);

let Password=window.prompt("Enter The Password");
console.log("UserPassword:"+Password);
