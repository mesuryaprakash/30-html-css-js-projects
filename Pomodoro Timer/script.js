const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.querySelector('.timer');

let interval, timeleft = 1500;

function upadateTimer(){
    let minutes = Math.floor(timeleft / 60);
    let seconds = timeleft % 60;
    let formatedMinute = minutes < 10 ? "0" + minutes : minutes;
    let formatedSecond = seconds < 10 ? "0" + seconds : seconds;
    let dispayTime = formatedMinute + ":" + formatedSecond;
    timer.textContent = dispayTime;
    // console.log(minutes, seconds)
}

function startTimer(){
    interval = setInterval(() => {
        upadateTimer()
        timeleft--;
        if(timeleft === -1){
            timer.textContent = "00:00";
            alert('Time is up');
            clearInterval(interval);
            timeleft = 1500;
            upadateTimer();
            // timer.textContent = "00:00";
        }
    },1000);
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeleft = 1500;
    upadateTimer();
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);
