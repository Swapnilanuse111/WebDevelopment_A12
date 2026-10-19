/*
java script printing ways
    1.console object
    2.document object
    3.window object
    4.innerHTML java script property:string
    5.innerText java script property
    6.textContent java script property
*/
// 1.console object
console.log("FirstOutput");
console.log("HelloWorld");
console.log(10+5);
console.warn("WarningOutput");
console.error("ErrorOutput");
console.dir(console);
console.dir(document);
console.dir(window);

// 2.document object
document.write("<b style='color:navy;'>FirstOutput</b><br/>");
document.write("<b style='color:gray;'>SecondOutput</b><br/>");
document.writeln("ThirdOutput<br/>");
document.writeln("FourthOutput");

// 3.window object
window.console.log();
window.document.write();
window.document.writeln();

// 4.innerHTML java script property:string
document.getElementById("block_one").innerHTML="<div style='width:50%;height:50%;background-color:black;border-radius:20px;'></div>";

// 5.innerText java script property:string
document.getElementById("block_two").innerText="<div style='width:50%;height:50%;background-color:black;border-radius:20px;'></div>";

// 6.textContent java script property:string
document.getElementById("block_three").textContent="<div style='width:50%;height:50%;background-color:black;border-radius:20px;'></div>";