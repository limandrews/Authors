const express = require('express');
//cors calls the 8000 from the 3000
const cors = require('cors');
// instantiating an express server and storing it in variable called app 
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// connecting app to the author route.
require('./server/routes/author.routes')(app);
//this means successfully running the server.
app.listen(8000, () => {
    console.log("You are now listening at port 8000");
})