const mongoose = require('mongoose');
const validator = require('validator');
const PropertyType = require('../enums/PropertyType');

const PropertySchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    
    _user_id: {
        type: String,
        required : true
    },
    name: {
        type: String,
        required : true
    },

    address: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Property', PropertySchema);