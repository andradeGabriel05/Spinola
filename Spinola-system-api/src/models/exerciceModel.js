const database = require("../config/config");

function incrementUserDetails(userId, pointsValue) {
  const query = `
    UPDATE user_exercice_details 
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
    SELECT * FROM user_exercice_details WHERE id_user = ${userId};
  `;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function incrementDayStrikeVerification(userId) {
  const currentDate = new Date().toISOString().split("T")[0];

  const query = `
    SELECT activity_date FROM time_on_lessons WHERE id_user = ${userId} AND activity_date = '${currentDate}';`;

  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function incrementDayStrike(userId) {
  const instrucaoSql = `
    UPDATE user_exercice_details SET day_strike = day_strike + 1 WHERE id_user = ${userId};
`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  incrementUserDetails,
  getUserExercicesDetails,
  incrementDayStrikeVerification,
  incrementDayStrike,
};
