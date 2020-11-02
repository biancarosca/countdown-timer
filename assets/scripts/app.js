let targetDate = '1 Jan 2021';

let targetTime = new Date(targetDate);


function countdown() {
    let currentTime = new Date();
    let totalSeconds = Math.floor((targetTime - currentTime) / 1000);
    let daysLeft = Math.floor(totalSeconds / 3600 / 24);
    let secondsLeft = 60 - currentTime.getSeconds() -1;
    let minutesLeft = 60 - currentTime.getMinutes() -1;
    let hoursLeft = 24 - currentTime.getHours() - 1 ;
    let daysEl = document.getElementById('days');
    let hoursEl = document.getElementById('hours');
    let minutesEl = document.getElementById('minutes');
    let secondsEl = document.getElementById('seconds');
    daysEl.innerText = `${daysLeft}`;
    hoursEl.innerText = `${hoursLeft}`;
    minutesEl.innerText = `${minutesLeft}`;
    secondsEl.innerText = `${secondsLeft}`;

}

setInterval(countdown, 1000);
