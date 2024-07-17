let timerInterval;
let timerRunning = false;
let seconds = 0;

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

function login() {
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;

    if (userId && password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'block';
        document.getElementById('username').textContent = userId;
        const now = new Date();
        const loginTime = now.toLocaleTimeString();
        document.getElementById('login-time').textContent = `Inicio sesión: ${loginTime}`;
    } else {
        alert('Por favor, ingrese ID y contraseña');
    }
}

function logout() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('main-container').style.display = 'none';
    document.getElementById('user-id').value = '';
    document.getElementById('password').value = '';
    clearInterval(timerInterval);
    timerRunning = false;
    seconds = 0;
    document.getElementById('timer').textContent = '00:00:00';
    document.getElementById('activity-log').innerHTML = '';
}
