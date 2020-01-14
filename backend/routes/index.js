const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events', eventController.getEvents);
router.get('/events/:slug', eventController.getEventBySlug);

module.exports = router;
