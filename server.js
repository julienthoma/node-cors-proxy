const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.listen(port);

app.post('/', ({ body }, res) => {
  request(
    {
      url: body.target,
      method: 'POST',
      json: true,
      headers: { 'content-type': 'application/json' },
      body: body.body
    },
    (_req, _res) => {
      res.send(_res);
    }
  );
});

module.exports = app;
