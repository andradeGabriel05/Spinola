    CREATE DATABASE Spinola;
    USE Spinola;

    -- Criação da tabela 'users'
    CREATE TABLE users (
        id_user INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(45) UNIQUE NOT NULL,
        email VARCHAR(45) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

    -- Criação da tabela 'user_exercise_details'
    CREATE TABLE user_exercise_details (
        id_user_details INT AUTO_INCREMENT PRIMARY KEY,
        id_user INT NOT NULL,
        points INT DEFAULT 0,
        lessons INT DEFAULT 0,
        day_strike INT DEFAULT 0,
        FOREIGN KEY (id_user) REFERENCES users(id_user)
    );

    -- Criação da tabela 'exercise'
    CREATE TABLE exercise (
        id_exercise INT AUTO_INCREMENT PRIMARY KEY,
        exercise INT NOT NULL,
        chapter INT NOT NULL,
        level CHAR(2) NOT NULL
    );

    -- Criação da tabela 'register_exercise'
    CREATE TABLE register_exercise (
        id_register INT PRIMARY KEY AUTO_INCREMENT,
        id_user INT NOT NULL,
        id_exercise INT NOT NULL,
        activity_date DATE NOT NULL,
        time_spent FLOAT DEFAULT 0,
        FOREIGN KEY (id_user) REFERENCES users(id_user),
        FOREIGN KEY (id_exercise) REFERENCES exercise(id_exercise)
    );
    

    -- Inserts de exemplo para a tabela 'users'
    INSERT INTO users (username, email, password)
    VALUES
    ('gabriel_teste', 'gabriel@teste.com', '123'),
    ('jeand', 'jeand@example.com', 'senha123'),
    ('mariec', 'mariec@example.com', 'senha456');

    -- Inserts de exemplo para a tabela 'exercise'
    INSERT INTO exercise (exercise, chapter, level)
    VALUES
    (1, 1, 'A1'),
    (2, 1, 'A1'),
    (3, 1, 'A1'),
    (4, 1, 'A1'),

    (1, 2, 'A1'),
    (2, 2, 'A1'),
    (3, 2, 'A1'),
    (4, 2, 'A1'),

    (1, 3, 'A1'),
    (2, 3, 'A1'),
    (3, 3, 'A1'),
    (4, 3, 'A1'),

    (1, 4, 'A1'),
    (2, 4, 'A1'),
    (3, 4, 'A1'),
    (4, 4, 'A1');

    -- Inserts de exemplo para a tabela 'user_exercise_details'
    INSERT INTO user_exercise_details (id_user, points, lessons, day_strike)
    VALUES
    (1, 50, 2, 3),
    (2, 70, 3, 5);

    -- Inserts de exemplo para a tabela 'register_exercise'
    INSERT INTO register_exercise (id_user, activity_date, time_spent, id_exercise)
    VALUES
    (1, '2024-11-22', 15.5, 1),
    (1, '2024-11-23', 20.0, 2),
    (2, '2024-11-22', 18.0, 3),
    (2, '2024-11-23', 25.0, 4);
    
    CREATE TABLE media_register(
	id_media INT PRIMARY KEY AUTO_INCREMENT,
    type_of_media VARCHAR(45),
    time_spent FLOAT,
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
    );
    
    INSERT INTO register_exercise (id_user, activity_date, time_spent, id_exercise)
    VALUES
    (1, '2024-11-22', 1500.5, 1);
    
    SELECT * FRom users JOIN register_exercise ON register_exercise.id_user = users.id_user;
    SELECT type_of_media, sum(time_spent)
      FROM media_register
      WHERE id_user = 1
	group by type_of_media;

INSERT INTO media_register (id_user, type_of_media, time_spent) 
VALUES 
(1, '1', 1200),  -- Tipo de mídia 1, 120 minutos de tempo gasto
(1, '2', 900),   -- Tipo de mídia 2, 90 minutos de tempo gasto
(1, '1', 600),   -- Tipo de mídia 1, 60 minutos de tempo gasto
(1, '3', 1500),  -- Tipo de mídia 3, 150 minutos de tempo gasto
(1, '2', 800);   -- Tipo de mídia 2, 80 minutos de tempo gasto