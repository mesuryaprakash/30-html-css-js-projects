const hourEle = document.getElementById('hour');
const minuteEle = document.getElementById('minute');
const secondEle = document.getElementById('second');
const ampmEle = document.getElementById('am-pm');

function updateClock() {
    let now = new Date();
    // hourEle.textContent = now.getHours();
    minuteEle.textContent = doubleDigit(now.getMinutes());
    secondEle.textContent = doubleDigit(now.getSeconds());
    if(now.getHours() > 12) {
        hourEle.textContent = doubleDigit(now.getHours() - 12);
        ampmEle.innerText = 'PM';
    } else {
        hourEle.textContent = doubleDigit(now.getHours());
        ampmEle.textContent = 'AM';
    }
}

function doubleDigit(value){
    return Number(value).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}

updateClock();

setInterval(updateClock, 1000);

// (Number(item.episode_number)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
