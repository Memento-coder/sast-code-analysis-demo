const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    const name = req.query.name;
    res.send("Hello " + name);
});

app.listen(3000);
