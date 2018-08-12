var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('product', ProductSchema);