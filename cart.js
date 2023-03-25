let cart = [];

function addToCart(index) {
    let item = gameArr[index];
    let existingItem = cart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({...item, quantity: 1});
    }
    console.log(cart);
}

function showCart() {
    let table = "<table id='cartTable'>";
    for (let i = 0; i < cart.length; i++) {
        table += `<tr> <td><img width="100" height="100" src="${cart[i].img}" alt="a">
<p>${cart[i].name}<p><p style="color: red">Giá : ${cart[i].price}</p>
<p style="color: green">Số lượng : ${cart[i].quantity}</p></td></tr>`
    }
    table += "</table>"
    document.getElementById('cart').innerHTML = table;
    document.getElementById('cart-frame').style.display= "block"
}

function hideCart() {
    document.getElementById('cart-frame').style.display = "none";
}

