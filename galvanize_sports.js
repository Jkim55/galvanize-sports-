var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){      //******************* must connect SC.itemID to I.item
      for(var item in inventory){
        if (itemId === inventory[item].id){  // checking to find item
          if (quantity > inventory[item].quantityAvailable){  //check i quanitity to quantity requested
            shoppingCart[item].quantity += inventory[item].quantityAvailable;
            inventory[item].quantityAvailable = 0;
          } else {
            shoppingCart[item].quantity += quantity;            //update sc quantiy
            inventory[item].quantityAvailable -= quantity;     // update i quantity
          }
        }
      }
    },

    removeItem: function(itemId, quantity){     //******************* must connect SC.itemID to I.item
      for(var item in shoppingCart){
        if (shoppingCart[item].itemId === itemId){  // checking to find item
          if (quantity > shoppingCart[item].quantity) {
            inventory[item].quantityAvailable += shoppingCart[item].quantity
            shoppingCart[item].quantity = 0;
          } else {
            shoppingCart[item].quantity -= quantity;
            inventory[item].quantityAvailable += quantity;
          }
        }
      }
    },

    getCheckoutSubtotal: function(){    //******************* must connect SC.itemID to I.item
        var checkoutSubtotal = 0.00;
        for (var item in shoppingCart){
          // if (inventory[item].id === shoppingCart[item].itemID){
            checkoutSubtotal += inventory[item].price * shoppingCart[item].quantity
          // }
        }
        return checkoutSubtotal.toFixed(2);
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
