const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// TODO: author pour organizers?

const eventSchema = new mongoose.Schema({
    name: String,
    slug: String,
    description: String,
    city: String,
    startDate: Date,
    endDate: Date,
    price: Number,
    url: String,
    address: String,
    postalCode: String,
    venue: String,
    author: String
});

module.exports = mongoose.model('Event', eventSchema);
