const express = require('express');
const router = express.Router();

// Getting the User Controller

const MessagesController = require('../controllers/messages.controller');

// Map each API to the Controller Functions

router.get('/', MessagesController.getAll);

// Export the Router
module.exports = router;