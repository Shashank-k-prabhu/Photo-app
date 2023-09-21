const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    message:{
        type:String,
        requires:true
    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;