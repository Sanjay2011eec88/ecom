var UserService = require('../service/userService');
var passport = require('passport');
var passportConfig = require('../config/passport');
var utils = require('../utils/authUtils');

/* GET home page. */
module.exports.setRoutes = function(app) {

    app.post('/userLogin', utils.loginRedirect, (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
        if (err) {
           return res.status(500).send(err);
        }
        if (!user) {
           return res.status(404).send('User not found');
        }
        if (user) {
        req.logIn(user, function (err) {
                if (err) {
                   return res.status(500).send('error')
                }
                   return res.status(200).send(user);
            });
        }
        })(req, res, next);
    });

    app.get('/userLogout', utils.loginRequired, (req, res) => {
        req.logout();
        return res.status(200).send({msg:"Logout successful"});
    });

    app.post('/userSignup', function(req, res) {
       UserService.signUp(req.body, function (err,user) {
           if(err){
               return res.status(500).send(err);
           }else {
               req.logIn(user, function (err) {
                   if (err) {
                      return res.status(500).send('error')
                   }
                   return res.status(201).send({msg:"Successfully created"});
               });
           }
       })
    });

    app.get('/userProfile', utils.loginRequired, (req, res, next) => {
        UserService.getUser(req.user, function (err, userProfile) {
            if(err){
                return res.status(500).send(err);
            }
        });
        return res.status(200).send(userProfile);
    });
};
