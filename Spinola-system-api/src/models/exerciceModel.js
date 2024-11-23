const database = require("../config/config");

function incrementUserDetails(userId, pointsValue, timeSpent) {
  const query = `
    UPDATE user_exercice_details 
    SET 
      lessons = lessons + 1,
      day_strike = day_strike + 1,
      points = points + ${pointsValue},
      time_spent = time_spent + ${timeSpent}
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

module.exports = {
  incrementUserDetails,
  getUserExercicesDetails,
};
