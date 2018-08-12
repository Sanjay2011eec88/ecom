var user = require('./routes_user');
var admin = require('./routes_admin');

module.exports.setRoutes = function(app) {
    user.setRoutes(app);
    admin.setRoutes(app)
};