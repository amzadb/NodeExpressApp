const express = require('express');
const router = express.Router();
const path = require('path');

// /admin/add-user with GET request
router.get('/add-user', (req, resp, next) => {
    // console.log('This is add-user middleware.');
    // resp.send('<form action="/admin/add-user" method="POST">' + 
    //     'Enter Username: <input type="text" name="userName">' + 
    //     '<button type="Submit">Submit</button></form>');
    resp.sendFile(path.join(__dirname, '../', 'views', 'add-user.html'));
});

// /admin/add-user with POST request
router.post('/add-user', (req, resp, next) => {
    console.log('This is users middleware. ' + JSON.stringify(req.body));
    resp.send('<h1>Users page</h1>');
});

router.get('/', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../', 'views', 'admin-home.html'));
});

module.exports = router;