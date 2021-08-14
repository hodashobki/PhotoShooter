const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./routes/user.router')(app);
const port = 8000;
const server = app.listen(port, () => {
    console.log("Listening to Port " + port )})
///////////////////////////////////////////////// socket.io
    const io = require('socket.io')(server, { cors: true });
    var clients = {}
    io.on('connection', socket => {
      clients[socket.id] = socket;
      console.log('new user id is :' + socket.id);
      socket.on('message', ({ name, message }) => {
        io.emit('message', { name, message })

      })
      socket.on('disconnect', function() {
        delete clients[socket.id];
        console.clear();
        console.log('deleted user id is :' + "["+socket.id+"]" );

    });
    })