const SERVER_URL = 'http://127.0.0.1:8000'

async function register(user) {
    let response = await fetch(`${SERVER_URL}/user/register`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json',
    },
    credentials: 'include'
});
let data = await response.json();
console.log(response.status)
}

async function submitRegister() {
    let user = {
        email: document.getElementById('email').value,
        password: document.getElementById('pw').value,
        fullname: document.getElementById('name').value,
    }
    console.log(user);
    let result = await register(user);
    console.log(result);
    console.log('test')
}

function setCookie(name, value) {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; path=/";
    document.cookie = updatedCookie;
  }