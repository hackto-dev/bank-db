const { Schema,model } = require('mongoose');

const customerSchema = Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now()
    },
    balance: {
        type: Number,
        default: 500
    }
});

const Customer = model('Customer',customerSchema);

module.exports = { Customer }