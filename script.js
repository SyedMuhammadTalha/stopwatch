var min = 0;
var sec = 0;
var msec = 0;

var minheading=document.getElementById("min");
var secheading=document.getElementById("sec");
var msecheading=document.getElementById("msec");

var Interval;

function timer(){
    msec++
    msecheading.innerHTML = msec;
    if (msec >= 100){
        sec++
        secheading.innerHTML= sec;
        msec = 0;
    } else if (sec >= 60) {
        min++
        minheading.innerHTML= min;
        sec = 0

    }
}
function start(){
    interval = setInterval(timer,10);

    // method 1 (for start button disabled after first time pressed)

         // document.getElementById("hidden").disabled=true;

    // method 2 (for start button disabled after first time pressed)

         document.getElementById("hidden").style.visibility="hidden";

    // method 3 (for start button disabled after first time pressed)

       // this.setAttribute("disabled","");
}

function stop(){
    clearInterval(interval)
}

function reset(){
    min=0
    sec=0
    msec=0
    minheading.innerHTML=min
    secheading.innerHTML=sec
    msecheading.innerHTML=msec
    stop()
}