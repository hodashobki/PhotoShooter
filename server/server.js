const express = require("express");
const app = express();
const cors=require("cors")
app.use(cors());
const cookieParser = require('cookie-parser');

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());

// This is where we import the users routes function from our user.routes.js file
const AllMyUserRoutes = require("./routes/user.routes");
AllMyUserRoutes(app);
// require("./routes/phot.routes")(app);
const AllPhots=require("./routes/phot.routes");
AllPhots(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
