const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const eventSchema = new mongoose.Schema({
    name: String
});

module.exports = mongoose.model('Event', eventSchema);
