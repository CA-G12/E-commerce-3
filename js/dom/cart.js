
const productContainer = document.querySelector(".product-container");
const totalPrice = document.querySelector("#total-price");
let cartItems = getItem('cart');


if(cartItems.lenght >0 ){
    renderCards(cartItems);
    totalPrice.innerText = getTotalPrice(cartItems);
}


function renderCards(cartItems){

const viewWrap = document.createElement("div");
viewWrap.className = "grid-view view-wrap";

cartItems.array.forEach(element => {
    viewWrap.appendChild(creatProductCard());

});

productContainer.appendChild(viewWrap);
}


function creatProductCard(){

    const productCard = document.createElement("div");
    productCard.className = "product-card view-item";


    productCard.appendChild(createProductImg());

    productCard.appendChild(createProductDetail());

    productCard.appendChild(createProductbtn());

    return productCard;
}


function createProductImg(){

    const productImgdiv= document.createElement("div");
    productImgdiv.className   = "product-image";

    const productImg =  document.createElement("img");
    productImg.src = "https://picsum.photos/200";


    productImgdiv.appendChild(productImg);
    return productImgdiv;
}


function createProductDetail(){

    const productDetail = document.createElement("div");
    productDetail.className ="product-detail vi-right";
    
    
    const productName = document.createElement("p");
    productName.className = "product-name";
    productName.innerText = "name";
    
    const productPrice = document.createElement("p");
    productName.className = "product-price";
    productPrice.innerText = "454";


 
    productDetail.appendChild(productName);
    productDetail.appendChild(productPrice);

    return productDetail;
}

function createProductbtn(){

    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-cart";

    removeBtn.innerText = "Remove From Cart";


    return removeBtn;


}

//renderCards();
