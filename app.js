var app = require('express')();
var http = require('http').createServer(app);

//administrador de salas
var {} = require("./bin/Rooms")

//cargar la plantilla html del juego
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//levantar el servidor
http.listen(3000, () => {
    console.log('listening on *:3000');
});
