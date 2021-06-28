var start = document.getElementById('start');
var reset = document.getElementById('reset');
var t=0;
var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    t=0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
       if(t==0)
        alert("time is up");
        h.value = 00;
        m.value = 00;
        s.value = 00;
        t=1;
        h.value = 0;
        m.value = 0;
        s.value = 0;
        t=0;
        //stop the timer after pressing "reset"
        stopInterval()
    }
    else
    if(h.value == 0 && m.value == 0 && s.value == 0){
        
        h.value = 0;
        m.value = 0;
        s.value = 0;
        
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    // else if(h.value == 0 && m.value == 0 && s.value == 0){
    //      alert("time is up");
    // }
    return;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}