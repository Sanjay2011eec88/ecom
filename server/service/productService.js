var Category = require('../models/category/category');
var async = require('async');
var faker = require('faker');
var Product = require('../models/product/product');
var product = module.exports = {};

product.getCategory = function (callback) {
    Category.find({},function (err, categoryList) {
        if(err){
            callback(err, null);
        }else {
            callback(null,categoryList)
        }
    })
};

product.getProducts = function (catgoryId, callback) {
    console.log(catgoryId);
    var query = {};
    if(catgoryId !== "All Categories"){
        query = { category: catgoryId }
    }
    Product
        .find(query)
        .populate('category')
        .exec(function(err, products) {
            if (err) {
                callback(err, null);
            }else {
                callback(null, products);
            }
        });
};

product.getProductById = function (product_id, callback) {
    Product.findById({ _id:product_id }, function(err, product) {
        if (err) {
            callback(err, null);
        }else {
            callback(null, product);
        };
    });
};

product.searchProduct = function (query, callback) {
    console.log("qeuryr",query);
        if (query) {
            Product.search({
                query_string: { query: query}
            }, function(err, results) {
                    if (err) callback(err, null);
                    var data = results.hits.hits.map(function(hit) {
                        return hit
                    });
                    callback(null, data);
            });
        }else {
            callback({msg:"Please enter search query"})
        }
};