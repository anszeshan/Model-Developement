DROP DATABASE IF EXISTS sleep_analysis;
CREATE DATABASE sleep_analysis;
USE sleep_analysis;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create sleep_data table
CREATE TABLE sleep_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    age INT NOT NULL CHECK (age >= 0 AND age <= 120),
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    sleep_duration DECIMAL(4,2) NOT NULL CHECK (sleep_duration >= 0 AND sleep_duration <= 24),
    caffeine INT NOT NULL CHECK (caffeine >= 0),
    exercise INT NOT NULL CHECK (exercise >= 0 AND exercise <= 7),
    smoking ENUM('Yes', 'No') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO users (username, full_name, email, password) VALUES
('Amandeep', 'Amandeep', 'Amandeep@gmail.com', '$2b$10$YourHashedPasswordHere'),
('Jaspreet', 'Jaspreet', 'Jaspreet@gmail.com', '$2b$10$YourHashedPasswordHere'),
('Nancy Gupta', 'Nancy Gupta', 'Nancy@gmail.com', '$2b$10$YourHashedPasswordHere'),
('Aditi', 'Aditi', 'Aditi@gmail.com', '$2b$10$YourHashedPasswordHere'),
('Palak', 'Palak', 'Palak@gmail.com', '$2b$10$YourHashedPasswordHere');

INSERT INTO sleep_data (user_id, age, gender, sleep_duration, caffeine, exercise, smoking) VALUES
(1, 20, 'Male', 7.5, 150, 3, 'No'),
(2, 22, 'Male', 8.2, 50, 4, 'No'),
(3, 23, 'Female', 8.2, 50, 4, 'No'),
(4, 24, 'Male', 6.8, 200, 2, 'Yes'),
(5, 23, 'Female', 7.8, 100, 5, 'No');

