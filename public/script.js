const cart = {};
let totalItems = 0;

function updateCart(productId, change) {
    
    if (!cart[productId]) cart[productId] = 0;

    cart[productId] = Math.max(cart[productId] + change, 0);

    totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    
    document.getElementById(`Shop-Front-Product-Amount-${productId}`).textContent = cart[productId];
}
