var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoosastic = require('mongoosastic');
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

ProductSchema.plugin(mongoosastic, {
    hosts:[
        'localhost:9200'
    ]
});
module.exports = mongoose.model('product', ProductSchema);