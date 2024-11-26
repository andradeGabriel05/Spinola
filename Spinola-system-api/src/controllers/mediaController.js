const mediaModel = require("../models/mediaModel");


function getTimeMedia(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("Seu email está undefined!");
  } else {
    mediaModel
      .getTimeMedia(userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function verifyTimeMedia(req, res) {
  const { userId, timeSpent, type } = req.body;

  if (!userId) {
    res.status(400).send("Seu email está undefined!");
  } else {
    mediaModel
      .verifyTimeMedia(type, timeSpent, userId)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.error("Houve um erro", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}


module.exports = {
  getTimeMedia,
  verifyTimeMedia
};