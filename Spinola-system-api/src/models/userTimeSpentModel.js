const database = require("../config/config"); // Certifique-se de que o caminho está correto

async function timeSpentExercise(userId, timeSpent, chapter, exercise) {
  const currentDate = new Date().toISOString().split("T")[0];

  const selectInstrucaoSql = `
  SELECT id_exercise 
  FROM exercise 
  WHERE chapter = ${chapter} AND exercise = ${exercise};`;
  console.log("Executando a instrução SQL para SELECT:\n" + selectInstrucaoSql);

  const result = await database.executar(selectInstrucaoSql);
  const idExercise = result[0].id_exercise;

  const instrucaoSql = `
    INSERT INTO register_exercise (id_user, time_spent, activity_date, id_exercise) VALUES (${userId}, ${timeSpent}, '${currentDate}', ${idExercise});`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUser(userId) {
  const instrucaoSql = `
        SELECT SUM(time_spent) as time_spent FROM register_exercise WHERE id_user = ${userId};`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserToday(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
        SELECT SUM(time_spent) as time_spent FROM register_exercise WHERE id_user = ${userId} AND activity_date = '${currentDate}';`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserYesterday(userId) {
  const instrucaoSql = `
          SELECT SUM(time_spent) as time_spent FROM register_exercise WHERE id_user = ${userId} AND activity_date = DATE_SUB(CURDATE(), INTERVAL 1 DAY);`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesUserWeek(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const instrucaoSql = `
          SELECT 
            WEEKDAY(activity_date) AS weekday, 
            SUM(time_spent) AS time_spent
          FROM register_exercise
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
          FROM register_exercise
            WHERE id_user = ${userId} AND activity_date BETWEEN DATE_SUB('${currentDate}', INTERVAL 6 DAY) AND '${currentDate}';
`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyUserPercentage(userId) {
  const instrucaoSql = `
  SELECT 
    COUNT(DISTINCT register_exercise.id_exercise) * 100.0 / (SELECT COUNT(*) FROM exercise) AS completed_percentage
  FROM register_exercise
  WHERE register_exercise.id_user = ${userId};
`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function verifyExercisesMade(userId) {
  const instrucaoSql = `
  SELECT DISTINCT(register_exercise.id_exercise)
  FROM register_exercise WHERE id_user = ${userId};
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
  verifyUserPercentage,
  verifyExercisesMade,
};
