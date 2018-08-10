var user = require('./routes_user')

module.exports.setRoutes = function(app) {
    user.setRoutes(app);
};