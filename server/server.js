const express = require("express");
const app = express();
const cors=require("cors")
app.use(cors());
app.use(express.json());//added



// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
// app.use(cookieParser());

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);
const AllPhots=require("./routes/phot.routes");
AllPhots(app);
require("./routes/comment.routes")(app);
require("./routes/complus.routes")(app);
const port = 8000;//added
const server = app.listen(port, () => {//added
    console.log("Listening to Port " + port )})//added

// app.listen(8000, () => console.log("The server is all fired up on port 8000"));
// *************
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