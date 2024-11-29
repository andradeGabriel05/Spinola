const database = require("../config/config");

function incrementUserDetails(userId, pointsValue) {
  const query = `
    UPDATE user_exercise_details 
    SET 
      lessons = lessons + 1,
      points = points + ${pointsValue}
    WHERE id_user = ${userId};
  `;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function getUserExercicesDetails(userId) {
  const query = `
    SELECT * FROM user_exercise_details WHERE id_user = ${userId};
  `;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function incrementDayStrikeVerification(userId) {
  const currentDate = new Date().toISOString().split("T")[0];
  if (!userId || isNaN(userId)) {
    res.status(400).send("ID inválido ou não fornecido!");
    return;
  }
  const query = `
    SELECT activity_date FROM register_exercise WHERE id_user = ${userId} AND activity_date = '${currentDate}';`;



  console.log("Executando a instrução SQL11: \n" + query);
  return database.executar(query);
}

function incrementDayStrike(userId) {
  const instrucaoSql = `
    UPDATE user_exercise_details SET day_strike = day_strike + 1 WHERE id_user = ${userId};
`;
  console.log("Executando a instrução SQL111: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function rankingPoints() {
  const instrucaoSql = `
    SELECT user_exercise_details.points, users.username
      FROM user_exercise_details
        JOIN users
          ON user_exercise_details.id_user = users.id_user
    ORDER BY user_exercise_details.points DESC
    LIMIT 5;
`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUser(userId) {
  const instrucaoSql = `
        SELECT SUM(time_spent) as time_spent FROM user_exercise_details WHERE id_user = ${userId};`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserToday(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
        SELECT SUM(time_spent) as time_spent 
          FROM user_exercise_details 
            JOIN register_exercise
              ON user_exercise_details.id_user = register_exercise.id_user
          WHERE register_exercise.id_user = ${userId} AND register_exercise.activity_date = '${currentDate}';`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserYesterday(userId) {
  const instrucaoSql = `
          SELECT SUM(DISTINCT time_spent) as time_spent 
            FROM user_exercise_details 
              JOIN register_exercise
                ON user_exercise_details.id_user = register_exercise.id_user
          WHERE register_exercise.id_user = ${userId} AND activity_date = DATE_SUB(CURDATE(), INTERVAL 1 DAY);`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserWeek(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
          SELECT 
            WEEKDAY(activity_date) AS weekday, 
            SUM(DISTINCT time_spent) AS time_spent
          FROM user_exercise_details
            JOIN register_exercise
              ON user_exercise_details.id_user = register_exercise.id_user
            WHERE register_exercise.id_user = ${userId} AND activity_date BETWEEN DATE_SUB('${currentDate}', INTERVAL 6 DAY) AND '${currentDate}'
          GROUP BY WEEKDAY(activity_date)
          ORDER BY weekday;
`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserWeekTotal(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
          SELECT 
            SUM(DISTINCT time_spent) AS time_spent
          FROM user_exercise_details
          JOIN register_exercise
            ON user_exercise_details.id_user = register_exercise.id_user
          WHERE register_exercise.id_user = ${userId} 
            AND activity_date BETWEEN DATE_SUB('${currentDate}', INTERVAL 6 DAY) AND '${currentDate}';
`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  incrementUserDetails,
  getUserExercicesDetails,
  incrementDayStrikeVerification,
  incrementDayStrike,
  rankingPoints,
  verifyExercisesUserToday,
  verifyExercisesUserYesterday,
  verifyExercisesUserWeek,
  verifyExercisesUser,
  verifyExercisesUserWeekTotal,
};
