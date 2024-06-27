const mongoose = require('mongoose');

const Ipad = mongoose.Schema({
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

const ipad = mongoose.model('Ipad', Ipad);

module.exports = ipad;



