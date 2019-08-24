//Import the required node modules.
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Load our config file.
dotenv.config({ path: './config.env' });

//Create a new express app.
const app = express();

//Developer debugging.
if(process.env.NODE_ENV === 'development') {
  //We use morgan in this case
  app.use(morgan('dev'));
}

//Gameserver route
app.use('/api/v1/server', require('./routes/gameserver'));

//For production on Heroku
if(process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static(__dirname + '/public/'));
  //Handle our single page app
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//The port for the server to listen on.
const port = process.env.PORT || 8000;

//App will listen for connections on a given port.
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});