var Category = require('../models/category/category');
var async = require('async');
var faker = require('faker');
var Product = require('../models/product/product');
var category = module.exports = {};

category.addCategory = function (categoryObject, callback) {
    var category = new Category();
    category.name = categoryObject.name;

    category.save(function(err) {
        if (err) {
            callback(err, null);
        }else {
            callback(null, {msg:`${categoryObject.name} added to category`})
        }
    });
};

category.getCategory = function (callback) {
    Category.find({},function (err, categoryList) {
        if(err){
            callback(err, null);
        }else {
            callback(null,categoryList)
        }
    })
};

category.addProducts = function (categoryName,callback) {
    async.waterfall([
        function (next) {
            Category.findOne({ name: categoryName }, function(err, category) {
                if (err) {
                    callback(err,null);
                }
                next(null, category);
            });
        },
        function (category, next) {
            for (var i = 0; i < 10; i++) {
                var product = new Product();
                product.category = category._id;
                product.name = faker.commerce.productName();
                product.price = faker.commerce.price();
                product.image = faker.image.image();

                product.save();
            }
            next(null, {msg:"Successfully product added"})
        }
    ],function (err, results) {
        if(err){
            callback(err, null);
        }else {
            callback(null,results);
        }
    });

};

category.getProducts = function (catgoryId, callback) {
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

category.getProductById = function (product_id, callback) {
    Product.findById({ _id:product_id }, function(err, product) {
        if (err) {
            callback(err, null);
        }else {
            callback(null, product);
        };
    });
};