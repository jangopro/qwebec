const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    city: String,
    date: Date,
    price: Number
});

module.exports = mongoose.model('Event', eventSchema);
