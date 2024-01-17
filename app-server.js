const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/admin');
const path = require('path');
const exp = require('constants');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/admin', router);
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, resp, next) => {
    resp.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});