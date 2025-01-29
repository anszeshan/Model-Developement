const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Get all users with pagination
router.get('/', UserController.getUsers);

// Get single user
router.get('/:id', UserController.getUserById);

// Create sleep data for a user
router.post('/:id/sleep-data', UserController.createSleepData);

module.exports = router;