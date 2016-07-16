var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){
      for (var inItem of this.inventory){ // loop thru inventory
        if (inItem.id === itemId){        // match inventory.id in inventory with itemID
          for (var scItem of this.shoppingCart){  // loop thru shoppingcart to match inventory.id with shoppingcart.itemID
            if(scItem.itemId === itemId){   // update shopping cart with new items (id and quatity)
              if (inItem.quantityAvailable < quantity){
                scItem.quantity += inItem.quantityAvailable;
                inItem.quantityAvailable = 0;
              } else {
                scItem.quantity += quantity;
                inItem.quantityAvailable -=quantity; // update inventory.quantity
              }
            }
          }
        }
      }
    },

    removeItem: function(itemId, quantity){
      for (var scItem of this.shoppingCart){
        if(scItem.itemId === itemId){
          for (var inItem of this.inventory){
            if (inItem.id === itemId){
              if (scItem.quantity <= quantity){
                inItem.quantityAvailable += scItem.quantity;
                scItem.quantity = 0;
              } else {
                inItem.quantityAvailable += quantity;
                scItem.quantity -= quantity;
              }
            }
          }
        }
      }
    },

    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        for(var scItem of shoppingCart){
          if(scItem.quantity > 0){
            for(var inItem of inventory){
              if (scItem.itemId === inItem.id){
                checkoutSubtotal += inItem.price * scItem.quantity
              }
            }
          }
        }
        return checkoutSubtotal;
    },

    getTax: function(subtotal, rate){
        var tax = 0.00;
        tax = subtotal * rate
        return tax;
    },

    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;
        var checkoutTotal = 0.00;
        var subtotal = this.getCheckoutSubtotal()
        var tax = this.getTax(subtotal, TAX_RATE)
        checkoutTotal += subtotal + tax
        return checkoutTotal.toFixed(2);
    }
}
