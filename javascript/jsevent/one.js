function mouseover_change(){
    document.getElementById("mouseover").style.backgroundColor="green";
    document.getElementById("mouseover").style.color="white";

}

function mouseout_change(){
    document.getElementById("mouseout").style.backgroundColor="yellow";
    document.getElementById("mouseout").style.color="white";
}

function click_change(){
    document.getElementById("click").style.backgroundColor="pink";
    document.getElementById("click").style.color="white";
}

function dbl_change(){
    document.getElementById("double").style.backgroundColor="yellow";
    document.getElementById("double").style.color="white";
}

function focus_change(){
    document.getElementById("focus").style.backgroundColor="green";
    document.getElementById("focus").style.color="white";
}

function change_upper(){
    var x=document.getElementById("blur");
    document.getElementById("blur").innerHTML="x.toUpperCase()";  
}

