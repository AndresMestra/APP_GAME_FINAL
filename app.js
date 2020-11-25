var app = require('express')();
var http = require('http').createServer(app);

//Sockets
io.sockets.on('connect', (socket) => {
    console.log(`Un nuevo usuario con id ${socket.id} se ha conectado`)

    var msg = `El usuario con id ${socket.id} se ha conectado`

    socket.emit('connect', msg);

    socket.on('setPing', () => { // se activa en el servidor el evento on con nombre setPing enviado desde el cliente
        socket.emit('setPong', 'Esto es un pong'); //enviamos una respuesta al cliente con un nuevo nombre
    });
})

//cargar la plantilla html del juego
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

//levantar el servidor
http.listen(3000, () => {
    console.log('listening on *:3000');
});
