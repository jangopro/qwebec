const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const eventSchema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    city: String,
    date: Date,
    price: Number,
    url: String,
    address: String,
    author: String
});

module.exports = mongoose.model('Event', eventSchema);
