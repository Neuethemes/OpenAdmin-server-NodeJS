const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const expressJwt = require('express-jwt');
const app = express();

// Parsers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
  secret: 'secretcode_jasndkasjdbajhsbdjhbasjd',
  getToken: req => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
}).unless({ path: ['/images/', '/user/authenticate', '/user/register'] }));

// Routes
app.use('/user', require('./api/routes/user.route'));
app.use('/stats', require('./api/routes/stats.route'));
app.use('/messages', require('./api/routes/messages.route'));

// Start the server
const port = process.env.PORT || '3003';
app.listen(port, () => console.log(`Running on localhost:${port}`));