// const cart = {};
// let totalItems = 0;

// function updateCart(productId, change) {
    
//     if (!cart[productId]) cart[productId] = 0;

//     cart[productId] = Math.max(cart[productId] + change, 0);

//     totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    
//     document.getElementById(`Quantity-${productId}`).textContent = cart[productId];
// }

// function addToCart(productId) {
//     document.getElementById(`Quantity-${productId}`).textContent = 0;
//     cart[productId] = 0;
// }

const cart = {};

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

function addToCart(productId) {
    //document.getElementById(`Quantity-${productId}`).textContent = cart[productId];
}

function cartButton() {
    const h1 = document.getElementById("test");
    const x = document.createTextNode("Hello");
    h1.remove();
    const y = document.createElement("p");
    y.appendChild(x);
    console.log("Hello!")
}