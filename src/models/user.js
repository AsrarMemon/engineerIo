const mongoose = require('mongoose');

const user = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

module.exports =  mongoose.model('User', user)