const express = require("express");
const cors = require('cors');
const app = express();
const { connectToDatabase } = require('./database/conexion');
app.use(express.json());

const db = connectToDatabase();


app.get('/', function(req, res) {
    res.send({Autora: "Autora: Daniela Karina Ruiz Hernández"});
});

app.post('/', function(req, res) {
    res.send(req.body);
});

const server = app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto 4000");
});

module.exports = app;