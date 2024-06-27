const mongoose = require('mongoose');

const Product = mongoose.Schema({
    "id":{
        required:true,
        type:String,
        unique:true,
        index:true
    },
    "productName": {
        required: true,
        type: String
    },
    "description": {
        required: true,
        type: String
    },
    "price": {
        required: true,
        type: Number
    },
    "image": {
        required: true,
        type: String
    }

});

const product = mongoose.model('Product', Product);

module.exports = product;



