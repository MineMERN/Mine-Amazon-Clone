
const main = document.querySelector("main");
const productNameArray = ["Home & Appliances", "Health & Pirsonal Care", "Furniture & Hone Decore", "Electronic Devices", "Beauty Picks", "Pet supplies", "Toys - New Arrival!", "Descover Fashion Trends"];
const productImgsrcArray = new Array("box1_image.jpg", "box2_image.jpg", "box3_image.jpg", "box4_image.jpg", "box5_image.jpg", "box6_image.jpg", "box7_image.jpg", "box8_image.jpg", );
    function CreateImg(){
        for (let i = 0; i <= 8; i++) {
        let elementProduct = document.createElement("div");
        elementProduct.setAttribute("class", "product-info");
        let productName = document.createElement("div");
        productName.setAttribute("class", "product-name");
        productName.innerHTML = productNameArray[i].toString();
        elementProduct.appendChild(productName);
        let productImage = document.createElement("img");
        productImage.setAttribute("class", "product-img")
        productImage.setAttribute("src", productImgsrcArray[i]);
        elementProduct.appendChild(productImage);
        let shopNow = document.createElement("div");
        let shopNowLink = document.createElement("a");
        shopNowLink.setAttribute("href", "#");
        shopNowLink.setAttribute("class", "shop-now-link");
        shopNowLink.innerHTML = "Shop now";
        shopNow.append(shopNowLink);
        elementProduct.append(shopNow);
        main.append(elementProduct);
    }
    };
CreateImg();
