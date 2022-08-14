//store the products array in localstorage as "products"
let productArr = JSON.parse(localStorage.getItem("products")) || [];

function item(name, price, type, img){
    this.name = name;
    this.price = price;
    this.type = type;
    this.imgURL = img;
}

document.getElementById("product_form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let type = document.getElementById("type").value;
    let img = document.getElementById("image").value;

    let itemObj = new item(name, price, type, img);
    productArr.push(itemObj);
    localStorage.setItem("products", JSON.stringify(productArr));
})