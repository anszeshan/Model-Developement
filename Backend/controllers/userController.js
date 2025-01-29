const UserModel = require('../models/userModel');

class UserController {
  // Get all users with pagination
  static async getUsers(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const result = await UserModel.getAllUsers(page, limit);
      
      // Format the response
      const formattedUsers = result.users.map(user => ({
        id: user.id,
        username: user.username,
        fullName: user.full_name,
        email: user.email,
        sleepData: {
          age: user.age,
          gender: user.gender,
          sleepDuration: user.sleep_duration,
          caffeine: user.caffeine,
          exercise: user.exercise,
          smoking: user.smoking
        }
      }));

      res.json({
        users: formattedUsers,
        pagination: result.pagination
      });
    } catch (error) {
      res.status(500).json({ 
        error: 'Failed to fetch users',
        details: error.message 
      });
    }
  }

  // Get single user by ID
  static async getUserById(req, res) {
    try {
      const user = await UserModel.getUserById(req.params.id);
      
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Format the response
      const formattedUser = {
        id: user.id,
        username: user.username,
        fullName: user.full_name,
        email: user.email,
        sleepData: {
          age: user.age,
          gender: user.gender,
          sleepDuration: user.sleep_duration,
          caffeine: user.caffeine,
          exercise: user.exercise,
          smoking: user.smoking
        }
      };

      res.json(formattedUser);
    } catch (error) {
      res.status(500).json({ 
        error: 'Failed to fetch user',
        details: error.message 
      });
    }
  }

  // Create sleep data for a user
  static async createSleepData(req, res) {
    try {
      const userId = req.params.id;
      const sleepData = req.body;

      const insertId = await UserModel.createSleepData(userId, sleepData);
      
      res.status(201).json({
        message: 'Sleep data created successfully',
        id: insertId
      });
    } catch (error) {
      res.status(500).json({ 
        error: 'Failed to create sleep data',
        details: error.message 
      });
    }
  }
}

module.exports = UserController;