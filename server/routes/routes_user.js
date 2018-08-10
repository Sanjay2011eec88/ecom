var UserService = require('../service/userService');

/* GET home page. */
module.exports.setRoutes = function(app) {
    app.post('/userSignup', function(req, res) {
       UserService.signUp(req.body, function (err,result) {
           if(err){
               return res.status(500).send(err);
           }else {
               return res.status(201).send({msg:"Successfully created"});
           }
       })
    });



};
