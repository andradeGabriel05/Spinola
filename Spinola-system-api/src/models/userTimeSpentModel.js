const database = require("../config/config"); // Certifique-se de que o caminho está correto

function timeSpentExercice(userId, timeSpent) {
  const instrucaoSql = `
    `;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  timeSpentExercice,
};
