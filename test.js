let products = ["Iphone 14", "Sony", "Samsung Flip", "Oppo", "Xiaomi"]
let demo;

function displayAllProduct() {
    //khai báo biến string sử dụng string literal
    let data = `<table>
                    <tr>
                        <th>STT</th>
                        <th>ProductName</th>
                        <th colspan="2" style="text-align: center">Action</th>
                        <th style="color: red">` + products.length + " products" + `</th>
                    </tr>`
    for (let i = 0; i < products.length; i++) {
        data += "<tr>"
        data += "<td>" + (i + 1) + "</td>"
        data += "<td>" + products[i] + "</td>"
        data += "<td><button onclick='updateProduct(" + i + ")'>Update</button></td>"
        data += "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>"
        data += "<td></td>"
        data += "</tr>"
    }
    data += `</table>`
    document.getElementById("display").innerHTML = data
}

function updateProduct(index) {
    document.getElementById("update").value = products[index]
    demo = index
}

function updateProduct2() {
    let updateProduct = document.getElementById("update").value
    products[demo] = updateProduct
    displayAllProduct()
}

function addProduct() {
    let product = document.getElementById("add").value
    console.log(product)
    if (product !== undefined && product !== "") {
        products.push(product)
        displayAllProduct()
    }
    document.getElementById("add").value = ""
}

// function updateProduct(index) {
//     let updateProduct = prompt("Nhập tên mới cho sản phẩm: ")
//     if (updateProduct !== "") {
//         products[index] = updateProduct
//         displayAllProduct()
//     }
// }



function deleteProduct(index) {
    if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + products[index] + " ?")) {
        products.splice(index, 1)
        displayAllProduct()
    }
}