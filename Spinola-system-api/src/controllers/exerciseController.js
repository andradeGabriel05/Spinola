const exerciseModel = require("../models/exerciceModel");

function verifyExercise(req, res) {
  const { userId } = req.body;

  if (!userId) {
    res.status(400).send("O ID está undefined!");
  } else {
    exerciseModel
      .incrementLessons(userId)
      .then((resultado) => {
        if (resultado.length === 0) {
          res
            .status(404)
            .send("Exercício não encontrado para o usuário informado.");
        } else {
          res.json(resultado);
        }
      })
      .catch((erro) => {
        console.error(
          "Houve um erro ao buscar os exercícios!",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

// function dayStrike() {
//   const { userId } = req.body;

//   if (!userId) {
//     res.status(400).send("O ID está undefined!");
//   } else {
//     exerciseModel
//       .incrementDayStrike(userId)
//       .then((resultado) => {
//         if (resultado.length === 0) {
//           res
//             .status(404)
//             .send("Exercício não encontrado para o usuário informado.");
//         } else {
//           res.json(resultado);
//         }
//       })
//       .catch((erro) => {
//         console.error(
//           "Houve um erro ao buscar os exercícios!",
//           erro.sqlMessage
//         );
//         res.status(500).json(erro.sqlMessage);
//       });
//   }
// }

function incrementPoints(req, res) {
  const { pointsValue, userId } = req.body;

  console.log("Corpo da requisição recebido:", req.body)

  exerciseModel
    .incrementPoints(pointsValue, userId)
    .then((resultado) => {
      if (resultado.length === 0) {
        res
          .status(404)
          .send("Exercício não encontrado para o usuário informado.");
      } else {
        res.json(resultado);
      }
    })
    .catch((erro) => {
      console.error("Houve um erro ao buscar os exercícios!", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function getUserExercicesDetails(req, res) {
  const { userId } = req.query;

  if (!userId) {
    res.status(400).send("O ID está undefined!");
  } else {
    exerciseModel
      .getUserExercicesDetails(userId)
      .then((resultado) => {
        if (resultado.length === 0) {
          res
            .status(404)
            .send("Exercício não encontrado para o usuário informado.");
        } else {
          res.json(resultado);
        }
      })
      .catch((erro) => {
        console.error(
          "Houve um erro ao buscar os exercícios!",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  verifyExercise,
  incrementPoints,
  getUserExercicesDetails,
};
