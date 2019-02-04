const timerP = document.getElementById('timer');
const startTimerBtn = document.getElementById('start-timer');
const stopTimerBtn = document.getElementById('stop-timer');
const resetTimerBtn = document.getElementById('reset-timer');
let timerId;
let counter = 0;
let startDate;
let time;
let timeBank;


function timer() {
    counter++;
    time = (new Date - startDate) / 1000 ;
    console.log(counter);
    console.log(time);
    if (timeBank) {
        total = timeBank + time;
        //timerP.innerHTML = total.toFixed();
        timerP.innerHTML = formatTime(total);
        console.log(formatTime(total));
        console.log('was bank');
    } else {
        //timerP.innerHTML = time.toFixed();
        timerP.innerHTML = formatTime(time);
        console.log('No bank');
    }
}

function formatTime(t) {
    let tempDate = new Date(null);
    tempDate.setSeconds(t);
    result = tempDate.toISOString().substr(11, 8);
    return result;
}


function startTimer() {
    startDate = new Date;
    timerId = setInterval(timer, 1000);
    startTimerBtn.classList.add('unclickable');
    stopTimerBtn.classList.remove('unclickable');
    // timerP.innerHTML = startTime;
}

function stopTimer() {
    clearInterval(timerId);
    if (timeBank) {
        timeBank = timeBank + time;
        console.log('Stopping, was bank');
    } else {
        timeBank = time;
        console.log('Stopping, no bank');
    }
    counter = 0;
    console.log(timeBank);
    startTimerBtn.classList.remove('unclickable');
    stopTimerBtn.classList.add('unclickable');
}

function resetTimer() {
    if (confirm('Are you sure you want to reset the timer?')){
        counter = 0;
        time = 0;
        timeBank = 0;
        startDate = new Date;
        timerP.innerHTML = '0';
    }
}

startTimerBtn.addEventListener('click', startTimer, false);
stopTimerBtn.addEventListener('click', stopTimer, false);
resetTimerBtn.addEventListener('click', resetTimer, false);