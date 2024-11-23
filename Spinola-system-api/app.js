const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");

const userRoutes = require("./src/routes/userRoutes");
const exerciseRoutes = require("./src/routes/exerciseRoutes");

const app = express();
const SERVER_PORT = process.env.PORT || 3300;

// Middlewares
app.use(express.json());
app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  response.header("Access-Control-Allow-Credentials", "true");
  response.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );

  next();
});


// Rotas
app.use("/api", userRoutes);
app.use("/api", exerciseRoutes);

// Servidor
app.listen(SERVER_PORT, () => {
  console.log("Server Listening on PORT:", SERVER_PORT);
});
