CREATE DATABASE Spinola;
USE Spinola;


CREATE TABLE users (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(45) NOT NULL UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    date_create DATE NOT NULL
);


CREATE TABLE user_exercice_details (
    id_user_details INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT NOT NULL,
    points INT DEFAULT 0,
    lessons INT DEFAULT 0,
	time_spent DECIMAL(5, 2) NOT NULL,
    day_strike INT DEFAULT 0,
    FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE
);


SELECT * FROM users;
SELECT * FROM user_exercice_details;



