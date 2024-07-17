function login() {
    const userId = document.getElementById('user-id').value;
    const password = document.getElementById('password').value;

    if (userId && password) {
        localStorage.setItem('username', userId);
        const now = new Date();
        const loginTime = now.toLocaleTimeString();
        localStorage.setItem('loginTime', loginTime);
        window.location.href = 'main.html';
    } else {
        alert('Por favor, ingrese ID y contraseña');
    }
}
