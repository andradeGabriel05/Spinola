const express = require('express');
const app = express();

app.use(express.json());

const SERVER_PORT = 3300;

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    response.header("Access-Control-Allow-Credentials", "true");
    response.header( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
    
    next();
});


const mysql = require('mysql');

const conn = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "123456",
        database: "teste",
        port: 3306
    }
)

conn.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("DB connected successful: " + connection.threadId)
})



app.listen(SERVER_PORT, () => {
    console.log("Server Listening on PORT:", SERVER_PORT);
});


app.post("/register-user", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    conn.getConnection(async (err, connection) => {
        if (err) throw (err)

        const sqlSearch = "SELECT * FROM user WHERE username = ?"
        const search_query = mysql.format(sqlSearch, [username])

        const sqlInsert = "INSERT INTO user VALUES (0,?, ?, ?)"
        const insert_query = mysql.format(sqlInsert, [username, password, 0])

        await connection.query(search_query, async (err, result) => {
            if (err) throw (err)

            console.log("------> Search Results")
            console.log(result.length)
            if (result.length != 0) {
                connection.release()
                console.log("------> User already exists")
                res.sendStatus(409)
            }
            else {
                await connection.query(insert_query, (err, result) => {
                    connection.release()
                    if (err) throw (err)
                    console.log("--------> Created new User")
                    console.log(result.insertId)
                    res.sendStatus(201)
                })
            }
        }) //end of connection.query()
    }) //end of db.getConnection()
})

app.put("/verify-exercice", async (req, res) => {
    conn.getConnection(async (err, connection) => {
        if (err) throw (err)

        const exerciceUpdateValue = "UPDATE user SET exercices = exercices + 1 WHERE id = 1 ";
        const update_query = mysql.format(exerciceUpdateValue)
        await connection.query(update_query, (err, result) => {
            if (err) throw (err)

            connection.release()
            if (err) throw (err)
            console.log("--------> Exercice made")
            console.log(result.insertId)
            res.sendStatus(201)
        })
    })
})

app.get("/status", (request, response) => {
    const status = {
        'Status': 'Running'
    };

    response.send(status);
});
