var cart = require('../service/cartService');
var utils = require('../utils/authUtils');
/* GET home page. */
module.exports.setRoutes = function(app) {
    app.get('/cart/:method', utils.loginRequired,function(req, res) {
        switch (req.params.method) {
            case "cartlength":
                cart.getCartLength(req.user, function (err, cartLength) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    return res.status(200).send(cartLength);
                });
                break;
            case "cartdetails":
                cart.getCartDetails(req.user, function (err, cartDetails) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    return res.status(200).send(cartDetails);
                });
                break;
            default:
                break;
        }
    });

    app.post('/cart/:product_id', function (req,res) {
        cart.addProductToCart(req.body, req.user, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }else{
                return res.status(201).send(result);
            }
        })
    });

    app.post('/remove', function (req,res) {
        cart.removeProductFromCart(req.body, req.user, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }else{
                return res.status(200).send(result);
            }
        })
    });

};