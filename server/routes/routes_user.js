var UserService = require('../service/userService');
var passport = require('passport');
var passportConfig = require('../config/passport');
var utils = require('../utils/authUtils');

/* GET home page. */
module.exports.setRoutes = function(app) {

    app.post('/userLogin', utils.loginRedirect, (req, res, next) => {
        passport.authenticate('local-login', (err, user, info) => {
            console.log(user);
        if (err) {
            res.status(500).send(err);
        }
        if (!user) {
            res.status(404).send('User not found');
        }
        if (user) {
        req.logIn(user, function (err) {
                if (err) {
                    res.status(500).send('error')
                }
                    res.status(200).send('success');
            });
        }
        })(req, res, next);
    });

    app.get('/userLogout', utils.loginRequired, (req, res, next) => {
        req.logout();
        res.status(200).send('success');
    });

    app.post('/userSignup', function(req, res) {
       UserService.signUp(req.body, function (err,user) {
           if(err){
               return res.status(500).send(err);
           }else {
               req.logIn(user, function (err) {
                   if (err) {
                       res.status(500).send('error')
                   }
                   return res.status(201).send({msg:"Successfully created"});
               });
           }
       })
    });



};
