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

module.exports = {
  incrementUserDetails,
  getUserExercicesDetails,
};
