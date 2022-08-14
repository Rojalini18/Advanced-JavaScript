let productArr = JSON.parse(localStorage.getItem("products"));

function showProduct(productArr){
    document.getElementById("products_data").innerHTML = "";
    productArr.map(function(elem){
        
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src",elem.imgURL);
        
        let name = document.createElement("h3")
        name.innerText = elem.name;

        let price = document.createElement("p")
        price.innerText = elem.price;

        let type = document.createElement("p")
        type.innerText = elem.type;

        let btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.addEventListener("click",function(){
            removeProduct(elem);
        })

        div.append(img, name, price, type, btn);
        document.getElementById("products_data").append(div);

    })

}

showProduct(productArr);

function removeProduct(data){
   productArr =  productArr.filter(function(elem){
        return elem.name != data.name
    })
    localStorage.setItem("products", JSON.stringify(productArr))
    showProduct(productArr);
    
}