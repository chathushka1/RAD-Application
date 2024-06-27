const mongoose = require('mongoose');

const ByModel = mongoose.Schema({
    "id":{
        required:true,
        type:Number,
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
    },
    "customerName": {
        required: true,
        type: String
    },
    "customerEmail": {
    required: true,
        type: String
    },
    "customerAddress": {
        required: true,
        type: String
    },
    "customerContact": {
        required: true,
        type: String
    },
    "productBook":{
        required: true,
        type: String,
        default: "Not Buy"
    },
    "bookingDateTime": {
        required: true,
        type: Date,
        default: Date.now()
    }

});

const byModel = mongoose.model('ByModel', ByModel);

module.exports = byModel;



