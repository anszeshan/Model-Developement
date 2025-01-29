
const db = require('../config/database').pool;

class UserModel {
  static async getAllUsers(page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;

      // Get total count of users
      const [countResult] = await db.query('SELECT COUNT(*) as total FROM users');
      const totalUsers = countResult[0].total;

      // Get paginated users with their sleep data
      const [users] = await db.query(`
        SELECT 
          u.id,
          u.username,
          u.full_name,
          u.email,
          sd.age,
          sd.gender,
          sd.sleep_duration,
          sd.caffeine,
          sd.exercise,
          sd.smoking
        FROM users u
        LEFT JOIN sleep_data sd ON u.id = sd.user_id
        ORDER BY u.id
        LIMIT ? OFFSET ?
      `, [limit, offset]);

      return {
        users,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(totalUsers / limit),
          totalItems: totalUsers,
          itemsPerPage: limit
        }
      };
    } catch (error) {
      throw new Error(`Error fetching users: ${error.message}`);
    }
  }

  static async getUserById(id) {
    try {
      const [users] = await db.query(`
        SELECT 
          u.id,
          u.username,
          u.full_name,
          u.email,
          sd.age,
          sd.gender,
          sd.sleep_duration,
          sd.caffeine,
          sd.exercise,
          sd.smoking
        FROM users u
        LEFT JOIN sleep_data sd ON u.id = sd.user_id
        WHERE u.id = ?
      `, [id]);

      return users[0] || null;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  static async createSleepData(userId, sleepData) {
    try {
      const [result] = await db.query(`
        INSERT INTO sleep_data 
        (user_id, age, gender, sleep_duration, caffeine, exercise, smoking)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [
        userId,
        sleepData.age,
        sleepData.gender,
        sleepData.sleepDuration,
        sleepData.caffeine,
        sleepData.exercise,
        sleepData.smoking
      ]);

      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating sleep data: ${error.message}`);
    }
  }
}

module.exports = UserModel;