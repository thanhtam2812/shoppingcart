const btnLogin = document.getElementById('btn-login')
const inputUsername = document.getElementById('username')
const inputPassword= document.getElementById('password')
const errEle = document.getElementById('error-login')

function loadAccount() {
    return JSON.parse(localStorage.getItem('account'))
}

const account = loadAccount()

btnLogin.addEventListener('click', () => {
    account.forEach((e) => {
        if (inputUsername.value === '' || inputPassword.value === '' ) {
            errEle.innerHTML = 'Please fill all inputs'
            setTimeout(() => {
                errEle.innerHTML = ''
            }, 2000);
        } else if (e.username !== inputUsername.value || e.password !== inputPassword.value) {
            errEle.innerHTML = 'Login was unsuccessful, please check your username and password'
            setTimeout(() => {
                errEle.innerHTML = ''
            }, 2000);
        } else {
            alert('Login success')
            window.location.assign('/index.html')
            localStorage.setItem('currentUser', e.email)
        }
    })
})
