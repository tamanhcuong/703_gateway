const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

// api
require('./api/router')(router);

module.exports = router;
