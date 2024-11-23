const usuarioModel = require("../models/userModel");

function login(req, res) {
  const { email, password } = req.body;

  if (!email) {
    res.status(400).send("Seu email está undefined!");
  } else if (!password) {
    res.status(400).send("password undefined!");
  } else {
    usuarioModel
      .login(email, password)
      .then((resultadoAutenticar) => {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

        if (resultadoAutenticar.length === 1) {
          const usuario = resultadoAutenticar[0];
          res.json({
            id_user: usuario.id_user,
            email: usuario.email,
            username: usuario.username,
          });

          console.log(usuario);
        } else if (resultadoAutenticar.length === 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o login!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function createUser(req, res) {
  const { username, email, password } = req.body;

  if (!username) {
    res.status(400).send("Seu nome está undefined!");
  } else if (!email) {
    res.status(400).send("Seu email está undefined!");
  } else if (!password) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    usuarioModel
      .createUser(username, email, password)
      .then((resultado) => {
        const response = res.json(resultado);
        console.log(response)
        const idUser = resultado.insertId
        usuarioModel
        .createUserDetails(idUser)
      })
      .catch((erro) => {
        console.error("Houve um erro ao realizar o cadastro!", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  createUser,
  login,
};
