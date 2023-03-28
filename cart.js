let cart = [];

function addToCart(index) {
    let item = gameArr1[index];
    let existingItem = cart.find(function (cart) {
        return cart.name === item.name
    });
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...item, quantity: 1});
    }
    alert("Sản phẩm " + gameArr1[index].name + " đã được thêm vào giỏ")
}

function showCart() {
    let table = "<table id='cartTable' class='table'>";
    for (let i = 0; i < cart.length; i++) {
        table += `<tr> <td><img width="100" height="100" src="${cart[i].img}" alt="a">
<p>${cart[i].name}<p><p style="color: red">Giá : ${cart[i].price}</p>
<p style="color: green">Số lượng : ${cart[i].quantity}</p></td></tr>`
    }
    table += "</table>"
    document.getElementById('cart').innerHTML = table;
    document.getElementById('cart-frame').style.display = "block";
}

function hideCart() {
    document.getElementById('cart-frame').style.display = "none";
}

function deleteCart() {
    cart.length = 0;
    showCart();
    totalPrice();
}

function totalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += (+cart[i].price) * cart[i].quantity;
    }
    document.getElementById('totalPrice').innerHTML = `<p style="color: red" >Tổng cộng : ${sum} đ`;
}

