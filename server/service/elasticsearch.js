var Product = require('../models/product/product');

module.exports = {}

console.log("Starting mapping");
// Product.createMapping(function(err, mapping) {
//     if (err) {
//         console.log("error creating mapping");
//         console.log(err);
//     } else {
//         console.log("Mapping created");
//         console.log(mapping);
//     }
// });

// var stream = Product.synchronize();
// var count = 0;

// stream.on('data', function() {
//     count++;
// });

// stream.on('close', function() {
//     console.log("Indexed " + count + " documents");
// });

// stream.on('error', function(err) {
//     console.log(err);
// });