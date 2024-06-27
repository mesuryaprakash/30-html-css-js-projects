const days = document.getElementById('day');
const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');
const year = document.querySelector('.year');

const newYear = new Date().getFullYear() + 1;
year.innerText = newYear;

const newYearTime = new Date(`Jan 1, ${newYear} 00:00:00`).getTime();
console.log(newYearTime);

upddateCountdown();

function upddateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    days.innerText = d;
    hours.innerText = h < 10 ? '0' + h : h;
    minutes.innerText = m < 10 ? '0' + m : m;
    seconds.innerText = s < 10 ? '0' + s : s;
}

setInterval(upddateCountdown, 1000);
