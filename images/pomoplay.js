
let worktime = 25*60;

let breaktime = 5*60;

let isworktime = true;

const timeDisplay = document.getElementById("time");

const sessionDisplay = document.getElementById("session");

function displayTime(seconds){
    let minutes = Math.floor(seconds/60);
    let remainderSeconds = seconds%60;
    const display = `${minutes < 10? '0': ''}${minutes} : ${remainderSeconds < 10? '0': ''}${remainderSeconds}`;
    timeDisplay.textContent = display;
}

function startTimer(duration){
    let timer = duration, minutes, seconds;
    const interval = setInterval( function(){
        minutes = parseInt(timer/60, 10);
        seconds = parseInt(timer%60, 10);
        displayTime(timer);
        if(--timer < 0){
            if(isworktime){
                sessionDisplay.textContent = "break time";
                timer = breaktime;
            }
            else{
                sessionDisplay.textContent = "work time";
                timer = worktime;
            }
            isworktime = !isworktime;
        }
    }, 1000 );
}

startTimer(worktime);
