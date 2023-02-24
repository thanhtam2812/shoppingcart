let inputUsername = document.getElementById('username')
let inputEmail = document.getElementById('email')
let inputPassword = document.getElementById('password')
const btnSubmit = document.getElementById('btn-submit')

var account = []

btnSubmit.addEventListener('click', () => {
    const newAccount = {
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value
    }
    account.push(newAccount)
    localStorage.setItem('account', JSON.stringify(account))
    inputUsername.value = ''
    inputEmail.value = ''
    inputPassword.value = ''
    alert('Đăng ký thành công')
})