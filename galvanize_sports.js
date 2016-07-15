var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){
      for(var item in inventory){
        if (inventory[item].id === itemId){  // checking to find item
          if (quantity > inventory[item].quantityAvailable){
            shoppingCart[item].quantity += inventory[item].quantityAvailable;
            inventory[item].quantityAvailable = 0;
          } else {//check i quanitity to quantity requested
            shoppingCart[item].quantity += quantity; //update sc quantiy
            inventory[item].quantityAvailable -= quantity; // update i quantity
          }
        }
      }
    },

    removeItem: function(itemId, quantity){

    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        // Your code here!
        return checkoutSubtotal;
    },
    getTax: function(subtotal, rate){
        var tax = 0.00;
        // Your code here!
        return tax;
    },
    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;
        var checkoutTotal = 0.00;
        // Your code here!
        return checkoutTotal;
    }
}
