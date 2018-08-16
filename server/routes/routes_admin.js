var adminService = require('../service/adminService');
var utils = require('../utils/authUtils');
var Product = require('../models/product/product');
/* GET home page. */
module.exports.setRoutes = function(app) {

    Product.createMapping(function(err, mapping) {
        if (err) {
            console.log("error creating mapping");
            console.log(err);
        } else {
            console.log("Mapping created");
            console.log(mapping);
        }
    });
    
    var stream = Product.synchronize();
    var count = 0;
    
    stream.on('data', function() {
        count++;
    });
    
    stream.on('close', function() {
        console.log("Indexed " + count + " documents");
    });
    
    stream.on('error', function(err) {
        console.log(err);
    });
    

    app.post('/add-category', utils.loginRequired, function(req, res) {
        adminService.addCategory(req.body, function (err, data) {
            if(err){
               return res.status(500).send(err);
            }else {
               return res.status(201).send(data);
            }
        })
    });


//This will add fake products for now
    app.get('/addProduct/:category', utils.loginRequired, function (req, res) {
        adminService.addProducts(req.params.category, function (err, message) {
            if(err){
                return res.status(500).send(err);
            }else {
                return res.status(201).send(message);
            }
        })
    })
};