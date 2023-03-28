
let adminInbox = [];

function hideChat() {
    document.getElementById('chatArea').style.display = "none";
}

function showChat() {
    document.getElementById('chatArea').style.display = "block";
}

function sendMessage() {
    let message = document.getElementById('chatInput').value;
    adminInbox.push(message);
    let name = JSON.parse(localStorage.getItem("usernameLogedin"));
    localStorage.setItem("Message", JSON.stringify(`${name} : ${message}`));
    alert("Tin nhắn đã gửi thành công");
    document.getElementById('chatInput').value = "";
}

function showAdminMessage() {
    let message = JSON.parse(localStorage.getItem("Message"));
    document.getElementById('adminInbox').innerHTML = message;
}

function showAdminInbox() {
    document.getElementById('adminInbox').style.display = "block";
}

function showAdminChatBtn() {
    let username = JSON.parse(localStorage.getItem("usernameLogedin"));
    console.log(username)
    if (username === "hieu") {
        document.getElementById("adminChatBtn").style.display = "block";
        document.getElementById("userChatBtn").style.display = "none";
    }
}