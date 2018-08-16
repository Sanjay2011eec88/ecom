var user = require('./routes_user');
var admin = require('./routes_admin');
var product = require('./routes_product');
var cart = require('./routes_cart');

module.exports.setRoutes = function(app) {
    user.setRoutes(app);
    admin.setRoutes(app);
    product.setRoutes(app);
    cart.setRoutes(app);
};