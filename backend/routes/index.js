const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// TODO manage to avoid api prefix
router.get('/api/events', eventController.getEvents);
router.get('/api/events/:slug', eventController.getEventBySlug);

module.exports = router;
