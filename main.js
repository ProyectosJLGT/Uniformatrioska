let timerInterval;
let timerRunning = false;
let seconds = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const username = localStorage.getItem('username');
    const loginTime = localStorage.getItem('loginTime');
    
    if (username && loginTime) {
        document.getElementById('username').textContent = username;
        document.getElementById('login-time').textContent = `Inicio sesión: ${loginTime}`;
    } else {
        window.location.href = 'login.html';
    }
});

function startTimer() {
    const currentActivity = document.getElementById('activity-list').value;
    const currentTime = document.getElementById('timer').textContent;
    
    if (timerRunning) {
        clearInterval(timerInterval);
        logActivity(currentTime, currentActivity);
        seconds = 0;
        document.getElementById('timer').textContent = '00:00:00';
    }
    timerRunning = true;
    timerInterval = setInterval(() => {
        seconds++;
        let hrs = Math.floor(seconds / 3600);
        let mins = Math.floor((seconds % 3600) / 60);
        let secs = seconds % 60;
        document.getElementById('timer').textContent = `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }, 1000);
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

function logActivity(time, activity) {
    const log = document.getElementById('activity-log');
    const listItem = document.createElement('li');
    listItem.textContent = `${time} ${activity}`;
    log.prepend(listItem);
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('loginTime');
    window.location.href = 'login.html';
}
