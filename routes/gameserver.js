//Require express to handle routes
const express = require('express');
//API request module
const unirest = require('unirest');

//Express router.
const router = express.Router();

//The specific route to handle.
router.get('/:type/:host/:port_query', (req, res) => {
  //The GET request to API
  const request = unirest('GET', process.env.API_URL);
  //Getting the request params using the destructuring assignment.
  const { type, host, port_query } = req.params;
  //The request query
  request.query({
    'port_query': port_query,
    'type': type,
    'host': host
  });
  //The request headers
  request.headers({
    'x-rapidapi-host': process.env.API_HOST,
    'x-rapidapi-key': process.env.API_KEY
  });
  //The request response
  request.end((response) => {
    //The response contains an error
    if(response.error) {
      return res.status(500).json({
        error: '500',
        message: 'Internal server error'
      });
    }
    //No server details
    if(!response.body.raw) {
      return res.status(404).json({
        error: '404',
        message: 'Server not found'
      });
    }
    //Send the data
    res.json(response.body);
  });
});

//Export the route
module.exports = router;

