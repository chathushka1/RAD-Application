const mongoose = require('mongoose');

const Iphone = mongoose.Schema({
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

const iphone = mongoose.model('Iphone', Iphone);

module.exports = iphone;



