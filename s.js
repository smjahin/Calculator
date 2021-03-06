var lastOperator = "";
var nextOperator = ""; 
var result = 0; 
var reset = false;
var lastInput = ""; 
var equal = 0;

function type(n){

    if (n == "0" && $("#temp").text=="0"){
        return;
    }

    if (n == "." && $("#temp").text().indexOf(n) >= 0){
        return;
    }
    
    if (($("#temp").text() == "0" || reset) && n != ".") {
        lastInput = $("#temp").text();
        $("#temp").text("");
        reset = false;
        lastOperator = nextOperator;
        nextOperator = "";
    }
    if($("#temp").text().length < 10){
        $("#temp").text($("#temp").text()+n);
    }
}

function nextOperatorOperation(op){
    
    if (op == "sqroot"){
        $("#temp").text(sqroot($("#temp").text()));
        nextOperator = "";
        return;
    }

    if (op == "square"){
        $("#temp").text(square($("#temp").text()));
        nextOperator = "";
        return;
    }

    if (op == "inverse"){
        $("#temp").text(inverse($("#temp").text()));
        nextOperator = "";
        return;
    }

    if (op == "percent"){
        $("#temp").text(percent($("#temp").text()));
        nextOperator = "";
        return;
    }

    if(nextOperator==0 && lastOperator.length!=0){
        solve();
    }

    nextOperator = op;
    reset = true;
}


function sqroot(a) {
    
    if(a % 1 != 0 || a>9999999){
        return Math.sqrt(Number(a)).toFixed(5);
    }
    else{
        return Math.sqrt(Number(a)).toFixed(5);
    }
}

function square(a) {
    if(Math.pow(Number(a), 2).toFixed(8)>999999999){
        return Math.pow(Number(a), 2).toExponential(3);
    }
    else if(a % 1 != 0){
        return Math.pow(Number(a), 2).toFixed(5);
    }
    else{
        return Math.pow(Number(a), 2);
    }

}

function inverse(a) {
    return (1 / Number(a)).toExponential(3);
}

function percent(a){
    return Number(a)/100;
}

function sum(a,b){
    if((Number(a)+Number(b)) > 999999999){
        return (Number(a)+Number(b)).toExponential(3);
        }
    return (Number(a)+Number(b));
}

function subs(a,b){

    if((Number(b)-Number(a)) > 999999999){

        return (Number(b)-Number(a)).toExponential(3);
    }
    return (Number(b)-Number(a));
}

function multiply(a,b){

    if((Number(b)*Number(a)) > 999999999){

        return (Number(b)*Number(a)).toExponential(3);
    }
    else if(a % 1 != 0){
        
        return (Number(b)*Number(a)).toFixed(5);
    
    }
    else{
        return (Number(b)*Number(a));
    }
}


function divide(a,b){
    if((Number(b)/Number(a)) > 999999999 || (Number(b)/Number(a))%1 != 0){
        return (Number(b)/Number(a)).toExponential(3);
        }
    else if(a % 1 != 0 ){
    
        return (Number(b)/Number(a)).toFixed(5);
    
    }
    else{
        return (Number(b)/Number(a));
    }
}



function solve(){
    var a;
    a = $("#temp").text();
    b = lastInput;
    
    if(lastInput !=0){
        if(lastOperator=="sum" || lastOperator=="+"){
            result = sum(a,b);
        }
        if(lastOperator=="subs"|| lastOperator=="-"){
            result = subs(a,b);
        }
        if(lastOperator=="multiply"|| lastOperator=="*"){
            result = multiply(a,b);
        }
        if(lastOperator=="divide"|| lastOperator=="/"){
            result = divide(a,b);
        }
        if(lastOperator == "sqroot"){
            sqroot();
            nextOperator = "";
            return;
        }
        if( lastOperator == "square"){
            square(a);
            nextOperator = "";
            return;
        }
        if( lastOperator == "inverse"){
            inverse(a);
            nextOperator = "";
            return;
        }
    }
    
    lastInput = $("#temp").text();
    $("#temp").text(result);
    nextOperator = "";
    reset = true;
}


// Clear input
function clearScr() {
    $("#temp").text("0");
}

// Reset everything
function resetInput() {
    $("#temp").text("0");
    nextOperator = "";
    lastOperator = "";
    lastInput = "";
}

function backspace() {
    var foo = $("#temp").text();
    foo = foo.split("");
    foo.pop();
    foo = foo.join("");
    if (foo == ""){
        foo = "";
    }
    else{
        foo = foo;
    }

    $("#temp").text(foo);
}

function plusminus() {
    $("#temp").text(-$("#temp").text());
}




//input
$(".number").click(function () {
    type($(this).text());
    nextOperator = "";
});

//operator
var count = 0;
$(".operator").click(function () {
    let op = this.id;
    if(op == "solve"){
        solve();
      if(lastOperator == "multiply"){
        lastInput = 1;
       }
      if(lastOperator == "subs" || lastOperator == "sum"){
        lastInput = 0;
      }
      if(lastOperator == "divide"){
        lastInput = ($("#temp").text());
      }
        return;
    }
    nextOperatorOperation(op);
});


// document.addEventListener('keydown', logKey)
// function logKey(e)
// {
//     if(e.key == "0" ||e.key == "1" ||e.key == "2" ||e.key == "3" ||e.key == "4" ||e.key == "5" ||e.key == "6" ||e.key == "7" ||e.key == "8" ||e.key == "9"){
//         type(e.key);
//         nextOperator = "";  
//     }

//     else if(e.key=="+" || e.key=="-"||e.key=="*"||e.key=="/"||e.key=="="){
//         if (e.key == "="){
//             solve();
//             return;
//         }
//         nextOperatorOperation(e.key);
//     }

// }


