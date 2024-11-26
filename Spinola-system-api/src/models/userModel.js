const database = require("../config/config"); // Certifique-se de que o caminho está correto

function createUser(username, email, password) {
  console.log(
    "ACESSEI O USER MODEL\n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente.\n\n function cadastrar():",
    username,
    email,
    password
  );
  const instrucaoSql = `
    INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');
  `;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function createUserDetails(userId) {
  const instrucaoSql = `
  INSERT INTO user_exercise_details (id_user, points, lessons, day_strike)
  VALUES (${userId}, 0, 0, 0);
`;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function login(email, senha) {
  console.log(
    "ACESSEI O USER MODEL\n\n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n\t\t >> verifique suas credenciais de acesso ao banco\n\t\t >> e se o servidor de seu BD está rodando corretamente.\n\n function autenticar():",
    email,
    senha
  );

  const instrucaoSql = `
    SELECT id_user, username, email FROM users WHERE email = '${email}' AND password = '${senha}';
  `;
  console.log("Executando a instrução SQL:\n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  createUser,
  createUserDetails,
  login,
};
