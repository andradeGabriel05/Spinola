const database = require("../config/config"); // Certifique-se de que o caminho está correto

function timeSpentExercise(userId, timeSpent) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
    INSERT INTO time_on_lessons (id_user, time_spent, activity_date) VALUES (${userId}, ${timeSpent}, '${currentDate}');`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUser(userId) {
  const instrucaoSql = `
        SELECT SUM(time_spent) as time_spent FROM time_on_lessons WHERE id_user = ${userId};`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserToday(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
        SELECT SUM(time_spent) as time_spent FROM time_on_lessons WHERE id_user = ${userId} AND activity_date = '${currentDate}';`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserYesterday(userId) {
  const instrucaoSql = `
          SELECT SUM(time_spent) as time_spent FROM time_on_lessons WHERE id_user = ${userId} AND activity_date = DATE_SUB(CURDATE(), INTERVAL 1 DAY);`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserWeek(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
          SELECT 
            WEEKDAY(activity_date) AS weekday, 
            SUM(time_spent) AS time_spent
          FROM time_on_lessons
            WHERE id_user = ${userId} AND activity_date BETWEEN DATE_SUB('${currentDate}', INTERVAL 6 DAY) AND '${currentDate}'
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
            SUM(time_spent) AS time_spent
          FROM time_on_lessons
            WHERE id_user = ${userId} AND activity_date BETWEEN DATE_SUB('${currentDate}', INTERVAL 6 DAY) AND '${currentDate}';
`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  timeSpentExercise,
  verifyExercisesUserToday,
  verifyExercisesUserYesterday,
  verifyExercisesUserWeek,
  verifyExercisesUser,
  verifyExercisesUserWeekTotal,
};
