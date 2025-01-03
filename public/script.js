let shoppingNumber = 0;

function buttonPressedPlus(productId) {
      if (shoppingNumber >= 0) { 
            document.getElementById("Shop-Front-Product-Amount").innerHTML = shoppingNumber += 1;
      }
      console.log(shoppingNumber);
      console.log("Product id: " + productId);
}
function buttonPressedMinus(productId) {
      if (shoppingNumber > 0) {
            document.getElementById("Shop-Front-Product-Amount").innerHTML = shoppingNumber -= 1;
      }
      console.log(shoppingNumber);
      console.log("Product id: " + productId);
}