const database = require("../config/config");

function getTimeMedia(userId) {
    const query = `
SELECT type_of_media, sum(time_spent) as time_spent
      FROM media_register
      WHERE id_user = ${userId}
	group by type_of_media;
    `;
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function verifyTimeMedia(typeOfMedia, timeSpent, userId) {
    const instrucaoSql = `
        INSERT INTO media_register (type_of_media, time_spent, id_user) 
        VALUES (${typeOfMedia}, ${timeSpent}, ${userId});
    `

    return database.executar(instrucaoSql)
}

module.exports = {
    getTimeMedia,
    verifyTimeMedia,
};
