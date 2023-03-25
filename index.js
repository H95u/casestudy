class Game {
    img
    name
    price
    category

    constructor(img, name, price, category) {
        this.img = img;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getImg() {
        return this.img;
    }

    setName(name) {
        this.name = name;
    }

    setCategory(category) {
        this.category = category;
    }

    setImg(img) {
        this.img = img;
    }

    setPrice(price) {
        this.price = price;
    }
}

let game = new Game("https://cdn.cloudflare.steamstatic.com/steam/apps/1313860/header.jpg?t=1610974344", "EA SPORTS™ FIFA 21 Champions Edition", "1.750.000", "Sport");
let game1 = new Game("https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/06/Naraka_HERO2-d9c607f3b27f839889e2.jpg", "NARAKA: BLADEPOINT", "360.000", "Action")
let game2 = new Game("https://asia.battlegrounds.pubg.com/wp-content/uploads/sites/6/2022/12/PUBG_BG_EGS@1920x1080-1168x657.jpg", "PUBG: BATTLEGROUNDS", "290.000", "FPS")
let game3 = new Game("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaaTgFKNleZstxD842_rQ8dxKvXu22JjvRuxLyyYjiSF80boN8r5e1pz3XpEYkLFOiInD9rwkAHozbmVjMDWoTm54E6yScw6-2ziuZntOT1g6Wj83jJMPFM0qCIrCBYYpXXjCmXDcobs-fb3Kh2GdDjo0zpQ3iRJHKUm2acLMHVh7dE0Zn7xTGG8W5/s1244/1.jpg", "GRAND THEFT AUTO V (GTA V)", "250.000", "Roleplay")
let game4 = new Game("https://muaga.me/wp-content/uploads/2019/09/Dragon-Ball-FighterZ-Ultimate-Edition-Steam-Key-1.jpg", "DRAGON BALL FighterZ - Ultimate Edition", "717.000", "Action")


let gameArr1 = [game, game1, game2, game3, game4];
let indexGame;
let gameArr = JSON.parse(localStorage.getItem('Game'));

function showList() {
    let table = "<table>";
    let row = "";
    let showButtons = localStorage.getItem('loginSuccess') === 'true';
    for (let i = 0; i < gameArr.length; i++) {
        if (i % 4 === 0) {
            table += "<tr>" + row + "</tr>";
            row = "";
        }
        row += `<td>
        <img width="250" height="200" src="${gameArr[i].img}" alt="a">
        <p>${gameArr[i].name}</p>
        <p style="color: #bd2828">Giá : ${gameArr[i].price}</p>
        <p style="color: #4ba74b"> Thể loại : ${gameArr[i].category} </p>
        <div style="display: ${showButtons ? 'block' : 'none'}"> 
        <button onclick="updateGame(${i}); showAddGame()">Edit</button>
        <button onclick="deleteGame(${i})">Delete</button>
        <button onclick="addToCart(${i}); showCart()">Thêm vào giỏ hàng</button>
        </div>
        </td>`;
    }
    table += "<tr>" + row + "</tr>";
    table += "</table>";
    document.getElementById('list-game').innerHTML = table;
}

function search() {
    let searchInput = document.getElementById('searchInput');
    let filterValue = searchInput.value.toUpperCase();
    let showButtons = localStorage.getItem('loginSuccess') === 'true';
    gameArr1 = gameArr.filter(game => {
        return game.name.toUpperCase().includes(filterValue);
    });

    let table = "<table>";
    let row = "";

    for (let i = 0; i < gameArr1.length; i++) {
        if (i % 4 === 0) {

            table += "<tr>" + row + "</tr>";

            row = "";
        }
        row += "<td>";
        row += `<img width="250" height="200" src="${gameArr1[i].img}" alt="a">`;
        row += `<p>${gameArr1[i].name}</p>`;
        row += `<p style="color: #bd2828">Giá : ${gameArr1[i].price}</p>`;
        row += `<p style="color: #4ba74b"> Thể loại : ${gameArr1[i].category} </p>`;
        row += `<div style="display: ${showButtons ? 'block' : 'none'}">
            <button onClick="updateGame(${i}); showAddGame()">Edit</button>
            <button onClick="deleteGame(${i})">Delete</button>
            <button onClick="addToCart(${i}); showCart()">Thêm vào giỏ hàng</button>
               </div>`
        row += "</td>";
    }
    table += "<tr>" + row + "</tr>";
    table += "</table>";
    document.getElementById('list-game').innerHTML = table;
}


function addGame() {
    let inputImg = document.getElementById('inputImg').value;
    let inputName = document.getElementById('inputName').value;
    let inputPrice = document.getElementById('inputPrice').value;
    let inputCategory = document.getElementById('inputCategory').value;
    let game = new Game(inputImg, inputName, inputPrice, inputCategory);
    gameArr.push(game);
    localStorage.setItem("Game", JSON.stringify(gameArr));
    showList();
}

function deleteGame(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm " + gameArr[index].name + "?")) {
        gameArr.splice(index, 1);
    }
    localStorage.setItem("Game", JSON.stringify(gameArr));
    showList();
}

function updateGame(index) {
    let game = gameArr[index];
    document.getElementById('inputImg').value = game.img;
    document.getElementById('inputName').value = game.name;
    document.getElementById('inputPrice').value = game.price;
    document.getElementById('inputCategory').value = game.category;
    indexGame = index;
    localStorage.setItem("Game", JSON.stringify(gameArr));
    showList();

}

function editGame() {
    let game = gameArr[indexGame];
    game.img = document.getElementById('inputImg').value;
    game.name = document.getElementById('inputName').value;
    game.price = document.getElementById('inputPrice').value;
    game.category = document.getElementById('inputCategory').value;
    localStorage.setItem("Game", JSON.stringify(gameArr));
    showList();
}

function showAddGame() {
    document.getElementById('infoTable').style.display = "block";
}

function hideAddGame() {
    document.getElementById('infoTable').style.display = "none";
}




