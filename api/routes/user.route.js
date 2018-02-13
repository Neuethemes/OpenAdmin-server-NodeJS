const express = require('express');
const router = express.Router();

// Getting the User Controller

const UserController = require('../controllers/user.controller');

// Map each API to the Controller Functions

router.post('/authenticate', UserController.authenticate);
router.post('/register', UserController.createUser);

router.get('/', UserController.getUsers);
router.put('/', UserController.updateUser);
router.delete('/:id', UserController.removeUser);

// Export the Router
module.exports = router;