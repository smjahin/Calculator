var last = "";
var next = ""; 
var result = 0; 
var reset = false;
var lastInput = ""; 

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
        last = next;
        next = "";
    }
    if($("#temp").text().length < 10){
        $("#temp").text($("#temp").text()+n);
    }
}

function nextOperation(op){
    
    if (op == "sqroot"){
        $("#temp").text(sqroot($("#temp").text()));
        next = "";
        return;
    }

    if (op == "square"){
        $("#temp").text(square($("#temp").text()));
        next = "";
        return;
    }

    if (op == "inverse"){
        $("#temp").text(inverse($("#temp").text()));
        next = "";
        return;
    }

    if (op == "percent"){
        $("#temp").text(percent($("#temp").text()));
        next = "";
        return;
    }

    if(next==0 && last.length!=0){
        solve();
    }

    next = op;
    reset = true;
}


function sqroot(a) {
    return Math.sqrt(Number(a)).toFixed(8);
}

function square(a) {
    if(Math.pow(Number(a), 2).toFixed(8)>999999999){
        return Math.pow(Number(a), 2).toExponential(3);
    }

    return Math.pow(Number(a), 2).toFixed(8);
}

function inverse(a) {
    return 1 / Number(a).toFixed(8);
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
    else{
        return (Number(b)*Number(a));
    }
}
function divide(a,b){
    if((Number(b)/Number(a)) > 999999999){
        return (Number(b)/Number(a)).toExponential(3);
        }
    return (Number(b)/Number(a));
}

function solve(){
    var a;
    a = $("#temp").text();
    b = lastInput;

    if(last=="sum"){
        result = sum(a,b);
    }
    if(last=="subs"){
        result = subs(a,b);
    }
    if(last=="multiply"){
        result = multiply(a,b);
    }
    if(last=="divide"){
        result = divide(a,b);
    }
    if(last == "sqroot"){
        sqroot();
        next = "";
        return;
    }
    if( last == "square"){
        square(a);
        next = "";
        return;
    }
    if( last == "inverse"){
        inverse(a);
        next = "";
        return;
    }

    lastInput = $("#temp").text();
    $("#temp").text(result);
    next = "";
    reset = true;
}


// Clear input
function clearScr() {
    $("#temp").text("0");
}

// Reset everything
function resetInput() {
    $("#temp").text("0");
    next = "";
    last = "";
    lastInput = "";
}

function backspace() {
    var foo = $("#temp").text();
    foo = foo.split("");
    foo.pop();
    foo = foo.join("");
    foo = foo == "" ? "0" : foo;

    $("#temp").text(foo);
}

function plusminus() {
    $("#temp").text(-$("#temp").text());
}




//input
$(".number").click(function () {
    type($(this).text());
    next = "";
});

//operator

$(".operator").click(function () {
    let op = this.id;
    if(op == "solve"){
        solve();
        return;
    }
    nextOperation(op);
});
