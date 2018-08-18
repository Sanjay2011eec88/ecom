'use strict';
const Cart = require('../models/cart/cart');

var cart = module.exports = {};

cart.getCartLength = function getCartLength(owner,callback){
    //Could use mongo query for this
    // db.getCollection('carts').aggregate([
    //     {$match: {owner:ObjectId("5b741fce766af4231fad8e81")}},
    //     {$unwind:"$items"},
    //     {$group:{_id:null, totalQuantity:{$sum:"$items.quantity"}}}
    // ]);

    var total = 0;
    var cartLength = {totalItems: total};
    Cart.findOne({ owner: owner._id }, function(err, cart) {
        if(err){
            callback(err, null);
        }
        else {
            if(cart.items.length > 0){
                for (var i = 0; i < cart.items.length; i++) {
                    total += cart.items[i].quantity;
                }
                cartLength.totalItems = total;
                callback(null, cartLength);
            }else {
                callback(null, cartLength);
            }
        }
    })
};

cart.addProductToCart = function addProductToCart(body, owner, callback) {
    Cart.findOne({ owner: owner._id }, function(err, cart) {
        cart.items.push({
            item: body.product_id,
            price: parseFloat(body.priceValue),
            quantity: parseInt(body.quantity)
        });

        cart.total = (cart.total + parseFloat(body.priceValue)).toFixed(2);

        cart.save(function(err, data) {
            if (err) callback(err, null);
            callback(null, data);
        });
    });
};

cart.getCartDetails = function getCartDetails(owner, callback) {
    Cart
        .findOne({ owner: owner._id })
        .populate('items.item')
        .exec(function(err, cardDetails) {
            if (err) callback(err, null);
            callback(null, cardDetails);
        });
};


//Not removing the item form items
//Need to improve
//By deleteing the item based on number and not just buy the whole item from the cart
cart.removeProductFromCart = function removeProductFromCart(body, owner,callback) {
    Cart.findOne({ owner: owner._id }, function(err, foundCart) {
        let cartAfterRemovingItem = foundCart.items.filter( x => x.item != body.item._id );
        foundCart.items = cartAfterRemovingItem;
        console.log(JSON.stringify(foundCart.items));
        foundCart.total = (foundCart.total - parseFloat(body.price)).toFixed(2);
        foundCart.save(function(err, found) {
            if (err){
                callback(err, null);
            }else {
                callback(null, {msg:`Item removed successfully`});
            }

        });
    });
};