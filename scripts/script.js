var count=0

document.getElementById("counter").onclick=function(){
    count=count+1;
    document.getElementById("counter-text").innerHTML=count}

document.getElementById("reset").onclick=function(){
    count=0
    document.getElementById("counter").innerHTML=count;
}
