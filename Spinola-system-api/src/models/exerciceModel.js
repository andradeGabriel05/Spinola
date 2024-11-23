const database = require("../config/config");

function incrementLessons(userId) {
  const query = `
    UPDATE user_exercice_details SET lessons = lessons + 1 WHERE id_user = ${userId};
  `;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

// function incrementDayStrike(userId) {
//   const query = `
//     UPDATE user_exercice_details SET day_strike = day_strike + 1 WHERE id_user = ${userId};
//   `;
//   console.log("Executando a instrução SQL: \n" + query);
//   return database.executar(query);
// }

function incrementPoints(pointsValue, userId) {
  const query = `
    UPDATE user_exercice_details SET points = points + ${pointsValue} WHERE id_user = ${userId};
  `;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

function getUserExercicesDetails(userId) {
  const query = `
    SELECT points, lessons, day_strike FROM user_exercice_details WHERE id_user = ${userId};
  `;
  console.log("Executando a instrução SQL: \n" + query);
  return database.executar(query);
}

module.exports = {
  incrementLessons,
  getUserExercicesDetails,
  incrementPoints,
};
