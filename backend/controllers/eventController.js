const mongoose = require('mongoose');
const Event = mongoose.model('Event');

exports.getEvents = async (req, res) => {
    const events = await Event.find();
    res.send({ events });
};

exports.getEventBySlug = async (req, res) => {
    const event = await Event.findOne({ slug: req.params.slug });
    res.send({ event });
};
