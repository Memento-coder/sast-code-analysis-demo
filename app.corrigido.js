const express = require('express');
const validator = require('validator');

const app = express();

app.get('/user', (req, res) => {
    let name = req.query.name;

    if (!validator.isAlphanumeric(name)) {
        return res.send("Invalid input");
    }

    res.send("Hello " + name);
});

app.listen(3000);
