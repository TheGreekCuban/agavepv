//Importing Modules
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

//Importing routes
const routes = require('./routes');

//Define Global Variables
const app = express();
const log = consol.log;
const PORT = process.env.PORT || 8080

//Step 1
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/agavepv', {
    useNewURLParser: true
})
 
//Step 2 - Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Step 3 - Check If Application Is In Production
if(process.env.NODE_ENV === 'production') {
    //Need to run npm build in client to get build folder.
    //We need to bring the react application into our server via the build folder.
    app.use(express.static('client/build'));
}

app.use(routes);

app.listen(PORT, () => {
    log(`Server is listening at http://localhost: ${PORT}`)
})