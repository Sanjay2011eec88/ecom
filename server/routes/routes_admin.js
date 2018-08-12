var categoryService = require('../service/categoryService');
var utils = require('../utils/authUtils');

/* GET home page. */
module.exports.setRoutes = function(app) {
    app.get('/add-category', utils.loginRequired, function(req, res, next) {
        res.render('admin/add-category', { message: req.flash('success') });
    });


    app.post('/add-category', utils.loginRequired, function(req, res) {
        categoryService.addCategory(req.body, function (err, data) {
            if(err){
               return res.status(500).send(err);
            }else {
               return res.status(201).send(data);
            }
        })
    });
};