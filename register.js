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
    if (username !== "" && password !== "" && name !== "" && phoneNumber !== "" && email !== "") {
        let check = checkAccountReg(username);
        if (check) {
            let account = new Account(username, password, name, phoneNumber, email);
            alert("Đăng ký thành công!");
            accountArr.push(account);
            showLoginForm();
            localStorage.setItem("Account", JSON.stringify(accountArr));
            let data = JSON.parse(localStorage.getItem('Account'));
            console.log(data)
        } else {
            alert("Tên đăng nhập của bạn bị trùng!!")
        }
    } else {
        alert("Bạn nhập thiếu thông tin! Mời nhập lại!")
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
        alert("Đăng nhập thành công!");
        localStorage.setItem("loginSuccess", JSON.stringify(true));
        localStorage.setItem("usernameLogedin", JSON.stringify(username));
        window.location.href = "index.html";
    } else {
        alert("Tài khoản của bạn không tồn tại !!");
        localStorage.setItem("loginSuccess", JSON.stringify(false));
    }
}

function logedinHello() {
    let username = localStorage.getItem('usernameLogedin');
    let check = localStorage.getItem('loginSuccess') === 'true';
    if (check) {
        document.getElementById('usernameHello').innerHTML = username;
        document.getElementById('addGameBtn').style.display = "block";
        document.getElementById('loginBtn').style.display = "none";
        document.getElementById('logoutBtn').style.display = "block";
    } else {
        document.getElementById('usernameHello').innerHTML = "Khách";
    }
}

function logOut() {
    localStorage.setItem('loginSuccess', false);
}

function showRegForm() {
    document.getElementById('formLogin').style.display = "none";
    document.getElementById('formRegister').style.display = "block";
}

function showLoginForm() {
    document.getElementById('formLogin').style.display = "block";
    document.getElementById('formRegister').style.display = "none";
}

function changeBackground() {
    if (document.getElementById('formLogin').style.display === "none") {
        document.body.classList.remove("background");
    } else {
        document.body.classList.add("background");
    }
}




