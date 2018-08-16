var utils = require('../utils/authUtils');
var productService = require('../service/productService');
module.exports.setRoutes = function(app) {

    app.get('/add-category', function(req, res, next) {
        productService.getCategory(function (err, categoryList) {
            if(err){
                return res.status(500).send(err);
            }else {
                return res.status(201).send(categoryList);
            }
        })
    });

    app.get('/category/:category_id', function (req, res) {
        productService.getProducts(req.params.category_id, function (err, productList) {
            if(err){
                return res.status(500).send(err);
            }else {
                return res.status(200).send(productList);
            }
        })
    });

    app.get('/product/:product_id', function (req, res) {
        productService.getProductById(req.params.product_id, function (err, productList) {
            if(err){
                return res.status(500).send(err);
            }else {
                return res.status(200).send(productList);
            }
        })
    });

    app.get('/search', function(req, res) {
        productService.searchProduct(req.query.q, function (err, searchResult) {
            if(err){
                return res.status(500).send(err);
            }else {
                return res.status(200).send(searchResult);
            }
        })
    });
};

