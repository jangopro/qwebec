const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Do work here
router.get('/api/hello', eventController.getEvents);

module.exports = router;
