class Account {

    constructor(username, password, name, phoneNumber, email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let adminAccount = new Account("hieu", "1")
let accountArr = [adminAccount];


function checkAccountReg(username) {

    for (let i = 0; i < accountArr.length; i++) {
        if (accountArr[i].username === username) {
            return false;
        }
    }
    return true;
}

function regNewAcc() {
    let username = document.getElementById('regUsername').value;
    let password = document.getElementById('regPassword').value;
    let name = document.getElementById('regName').value;
    let phoneNumber = document.getElementById('regPhoneNumber').value;
    let email = document.getElementById('regEmail').value;
    let check = checkAccountReg(username);
    if (check) {
        let account = new Account(username, password, name, phoneNumber, email);
        alert("Đăng ký thành công");
        accountArr.push(account);
        showLoginForm();
        localStorage.setItem("Account",JSON.stringify(accountArr));
        let data = JSON.parse(localStorage.getItem('Account'));
        console.log(data)

    } else {
        alert("Tên đăng nhập của bạn bị trùng!!")

    }
}

function checkLogin(username, password) {
    for (let i = 0; i < accountArr.length; i++) {
        if (accountArr[i].username === username
            && accountArr[i].password === password) {
            return true;
        }
    }
    return false;
}

function login() {
    let username = document.getElementById('userNameLogin').value;
    let password = document.getElementById("passWordLogin").value;
    let check = checkLogin(username, password)

    if (check) {
        alert("đăng nhập thành công");
        localStorage.setItem("loginSuccess",JSON.stringify(true));
        window.location.href = "index.html";
    } else {
        alert("đăng nhập thất bại");
        localStorage.setItem("loginSuccess",JSON.stringify(false));
        window.location.href = "index.html";
    }
}

function showRegForm() {
    document.getElementById('formLogin').style.display = "none";
    document.getElementById('formRegister').style.display = "block";
}

function showLoginForm() {
    document.getElementById('formLogin').style.display = "block";
    document.getElementById('formRegister').style.display = "none";
}
function isLogin() {
    let data = JSON.parse(localStorage.getItem('loginSuccess'));
    console.log(data)
    if (data){
        document.getElementById('updateBtns').style.display = "block";
    }else {
        document.getElementById('updateBtns').style.display = "none";
    }
}

