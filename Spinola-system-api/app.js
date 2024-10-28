const express = require('express');
const app = express();
app.use(express.json());

const SERVER_PORT = 3300;

app.listen(SERVER_PORT, () => {
    console.log("Server Listening on PORT:", SERVER_PORT);
});


app.get("/status", (request, response) => {
    const status = {
        'Status': 'Running'
    };

    response.send(status);
});

app.post("/singup", (request, response) => {
    const status = {
        'username': 'teste',
        'password': '123'
    };

    response.send(status);
});