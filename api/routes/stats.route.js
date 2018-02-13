const express = require('express');
const router = express.Router();

// Getting the User Controller

const StatsController = require('../controllers/stats.controller');

// Map each API to the Controller Functions

router.get('/monitoring', StatsController.getMonitoring);
router.get('/sales', StatsController.getSales);
router.get('/summary', StatsController.getSummary);
router.get('/charts', StatsController.getCharts);

router.get('/update', StatsController.updateStats);

// Export the Router
module.exports = router;