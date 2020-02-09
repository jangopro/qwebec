const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// TODO: Code postal
// TODO: author pour organizers?
// TODO Le nom de l'endroit? ex: Centre de foires

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
