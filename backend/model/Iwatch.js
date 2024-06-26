const mongoose = require('mongoose');

const Iwatch = mongoose.Schema({
    "id":{
        required:true,
        type:Number,
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

const iwatch = mongoose.model('Iwatch', Iwatch);

module.exports = iwatch;



