function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const message = document.getElementById('reg-message');

    if (username && password) {
        localStorage.setItem(username, password);
        message.textContent = 'Registration successful!';
        message.style.color = 'green';
        document.getElementById('reg-username').value = '';
        document.getElementById('reg-password').value = '';
    } else {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('secured-page').style.display = 'block';
    } else {
        message.textContent = 'Invalid username or password.';
        message.style.color = 'red';
    }
}

function logout() {
    document.getElementById('auth-container').style.display = 'block';
    document.getElementById('secured-page').style.display = 'none';
    document.getElementById('login-message').textContent = '';
}
