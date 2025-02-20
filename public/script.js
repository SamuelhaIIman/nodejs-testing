const cart = {};
const remember = [0, 0, 0];

function updateCart(productId, change) {
    // I create the object
    if(!cart[productId]) {
        cart[productId] = 0;
    }
    // I add here to the products amount
    if(cart.hasOwnProperty(productId)) {
        cart[productId] += change;
    }
    // I check the produts amount that it doesn't go below zero
    if(cart[productId] < 0) {
        cart[productId] = 0;
    }else {
        document.getElementById(`Quantity-${productId}`).textContent = cart[productId];
    }
}

function addToCart(productId, imageName) {
    const shopCart = document.getElementById("Shop-Cart");
    if(remember[productId-1] === 0) {
        // Create an image when button pressed
        const image = document.createElement("img");
        image.src = `images/${imageName}`;
        shopCart.appendChild(image);
        image.classList.add("New");
        remember[productId-1] += 1;
        // Create a pragraph when button pressed
        const para = document.createElement("p");
        shopCart.appendChild(para);
        para.className = "Amount-Style";
        para.innerHTML = document.getElementById(`Quantity-${productId}`).innerHTML;
        document.getElementById(`Quantity-${productId}`).innerHTML = 0;
    }
}

function cartButton() {
    const menu = document.getElementById("Open-Menu");
    const menuWindow = document.createElement("h1");
    menu.appendChild(menuWindow);
    menuWindow.innerHTML = "Hello world!";
    
    console.log("Hello world!");
}