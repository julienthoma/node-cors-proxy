const express = require('express');
const bodyParser = require('body-parser');
const cors = require('express-cors');
const app = express();
 
app.use(cors({
    allowedOrigins: ['*']
}));

const port = process.env.PORT || 3000;

app.listen(port);
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('test');
});

module.exports = app;
