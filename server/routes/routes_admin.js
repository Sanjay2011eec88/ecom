var adminService = require('../service/adminService');
var utils = require('../utils/authUtils');

/* GET home page. */
module.exports.setRoutes = function(app) {
    app.get('/add-category', function(req, res, next) {
        adminService.getCategory(function (err, categoryList) {
            if(err){
                return res.status(500).send(err);
            }else {
                return res.status(201).send(categoryList);
            }
        })
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