const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const app = express();
 
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyParser.json());

app.post('/', ({ target, body }, res) => {
    request.post(target,
    body,
    (_req, _res) => {
        res.send(_res);
    });
});

module.exports = app;
