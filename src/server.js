const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const Constant = require('./confs/constant');

const app = new Express();
app.use(cors(), bodyParser.json());

app.listen(Constant.SERVER_PORT, () => {
    console.log(
      `Server started on port: ${Constant.SERVER_PORT}! Go to http://localhost:${Constant.SERVER_PORT}/api`
    );
  });