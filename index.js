const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/json
app.use(bodyParser.json());

// connect Database
require('./modules/mongo_db');

// Public Access API
const publicAccess_API = require('./routes/public_access');
app.use('/public', publicAccess_API);

// Public Access API
const privateAccess_API = require('./routes/private_access');
const middlewarePrivate = require('./middleware/token_validator');
app.use('/private',middlewarePrivate, privateAccess_API);



// start the server
app.listen(6600);
