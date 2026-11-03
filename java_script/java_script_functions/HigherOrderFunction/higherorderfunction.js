//Higher Order Function

function Callback(){         
    console.log("Hello Swapnil");
}
function display(Callback){     //display is higher order function
    Callback();
}
display(HigherOrder);
