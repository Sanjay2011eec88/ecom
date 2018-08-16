var User = require('../models/users/users');
var async = require('async');
var Cart = require('../models/cart/cart');
var UserService = module.exports = {};

UserService.signUp = function createUser(req, callback) {
    async.waterfall([
       function (next) {
           var user = new User();
           user.profile.firstName = req.firstName;
           user.profile.lastName = req.lastName;
           user.password = req.password;
           user.email = req.username;
           User.findOne({ email: req.email }, function(err, existingUser) {
               if (existingUser) {
                   console.log("Account with that email address already exists");
                   callback({status:409,msg:"Account with that email address already exists"},null);
               } else {
                   user.save(function(err, user) {
                       if (err) {
                           next(err,null);
                       }else {
                           next(null, user);
                       }
                   });
               }
           });
       },
       function (user, next) {
           var cart = new Cart();
           cart.owner = user._id;
           cart.save(function(err) {
              if (err) callback(err,null);
              callback(null,user);
           });
       } 
    ]);
};

UserService.getUser = function getUser(user, callback) {
    var userProfile = {};
    userProfile.firstName = user.profile.firstName;
    userProfile.lastName = user.profile.lastName;
    userProfile.email = user.email;
    callback(null, userProfile);
};