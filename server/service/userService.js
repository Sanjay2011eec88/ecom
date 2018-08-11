var User = require('../models/users/users');

var UserService = module.exports = {};
UserService.signUp = function createUser(req, callback) {
    console.log(req);
    var user = new User();
    user.profile.name = req.name;
    user.password = req.password;
    user.email = req.email;
    User.findOne({ email: req.email }, function(err, existingUser) {
        if (existingUser) {
            console.log("Account with that email address already exists");
            callback({status:409,msg:"Account with that email address already exists"},null);
        } else {
            user.save(function(err, user) {
                if (err) {
                    callback(err,null);
                }else {
                    callback(null, user);
                }
            });
        }
    });
};