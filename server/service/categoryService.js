var Category = require('../models/category/category');

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