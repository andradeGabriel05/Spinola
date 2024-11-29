const mysql = require("mysql2");

// const conn = mysql.createPool({
//   host: "localhost",
//   user: "aluno",
//   password: "Sptech#2024",
//   database: "Spinola",
//   port: 3307,
// });
const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "Spinola",
  port: 3306,
});
function executar(instrucaoSql) {
  return new Promise((resolve, reject) => {
    conn.query(instrucaoSql, (erro, resultados) => {
      if (erro) {
        reject(erro);
      } else {
        console.log(resultados);
        resolve(resultados);
      }
    });
  });
}

module.exports = { executar };
