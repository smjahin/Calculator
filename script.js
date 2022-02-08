
function getHistory_fromscreen(){
    return document.getElementById('history-value').innerHTML;
}

function getValue_fromscreen(){
    return document.getElementById("output-value").innerHTML;
}

function setHistory_onscreen(num){
    document.getElementById('history-value').innerHTML = num;
}

function setValue_onscreen(num){
    document.getElementById('output-value').innerHTML = num;
}

//setValue_onscreen("100");


var operator = document.getElementsByClassName("operator");

// operator[10].addEventListener("click", function(){
//     var history = getHistory_fromscreen();
//     var value   = getValue_fromscreen();
//     history = history + value;
//     history = history + this.id;
//     setValue_onscreen("");
//     setHistory_onscreen(history);
// });



// operator[11].addEventListener("click", function(){
//     var r = getHistory_fromscreen()+getValue_fromscreen();
//     var result = eval(r);
//     setValue_onscreen(result);
//     setHistory_onscreen("");
// });

for (let i=0;i<operator.length;i++){
    operator[i].addEventListener("click", function(){

        if(this.id=="+" || this.id=="-"||this.id=="*"||this.id=="/"||this.id=="="||this.id=="%"){
            var output = getValue_fromscreen();
            var history = getHistory_fromscreen();
            if(output !=""){
                history = history + output;
                if(this.id == "="){
                    var r = getHistory_fromscreen()+getValue_fromscreen();
                    var result = eval(r);
                    setHistory_onscreen("");
                    setValue_onscreen(result);
                }
                else{
                    history = history + this.id;
                    setHistory_onscreen(history);
                    setValue_onscreen("");
                }
            }
    }

    else if(this.id == "backspace"){
        var output = getValue_fromscreen();
        if(output){
        output = output.substring(0,output.length-1);
        }
        setValue_onscreen(output);
    }
    else if(this.id == "clear"){
        setHistory_onscreen("");
        setValue_onscreen("");
    }
    else if(this.id == "√"){
        var out = getValue_fromscreen();
        setHistory_onscreen(this.id+out);
        setValue_onscreen(Math.sqrt(out));
    }

    else if(this.id == "sqr("){
        var out = getValue_fromscreen();
        setHistory_onscreen(this.id+out+")");
        setValue_onscreen(out*out);
    }
    else if(this.id == "inverse"){
        var out = getValue_fromscreen();
        setHistory_onscreen("1/"+"("+out+")");
        out = parseInt(out);
        var result = (1/out);
        setValue_onscreen(result);
    }

    });
}


var number = document.getElementsByClassName("number");

for( let i=0;i<number.length;i++){
    number[i].addEventListener("click",function(){
        if(this.id != NaN){
        var value = getValue_fromscreen()
        value = value + this.id;
        setValue_onscreen(value);
        }
    });
    
}





////////////////////// Key Board Code/////////////////////////////


document.addEventListener('keydown', logKey)
function logKey(e)
{
    // console.log(e.key)
for (let i = 0;i<10;i++){
    if (e.key == i){
        var value = getValue_fromscreen()
        value = value + e.key;
        setValue_onscreen(value);
    }
  }


  if(e.keyCode == 190){
    var value = getValue_fromscreen()
    value = value + e.key;
    setValue_onscreen(value);
  }

  


  ///////////////////operator//////////////////

  ////// operations/////////////

  if(e.key=="+" || e.key=="-"||e.key=="*"||e.key=="/"||e.key=="="||e.key=="%"){
    var output = getValue_fromscreen();
    var history = getHistory_fromscreen();
    if(output !=""){
        history = history + output;
         
        
        if(e.key == "=" || e.keyCode == 13){
            var r = getHistory_fromscreen()+getValue_fromscreen();
            var result = eval(r);
            setHistory_onscreen("");
            // if(result.length <13 || parseInt(result) > 99999999999999999){
            // setValue_onscreen(result);
            // }
            // else{
            //     setValue_onscreen("Undefined")
            // }
            setValue_onscreen(result);

        }
        else{
            history = history + e.key;
            setHistory_onscreen(history);
            setValue_onscreen("");
            // var m = history.split("+").length - 1;
            // console.log(m);
        }
    }
}

////// operations/////////////


///// other /////////
else if(e.keyCode == 8){
    var output = getValue_fromscreen();
    if(output){
    output = output.substring(0,output.length-1);
    }
    setValue_onscreen(output);
}
else if(e.keyCode == 46){
    setHistory_onscreen("");
    setValue_onscreen("");
}

  

////////////////other/////////////////////



}
