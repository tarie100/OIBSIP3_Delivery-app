const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.get('/', (req, res) => {
    res.send('hi');
});
const port = 5000;
app.listen(port, () => {
    console.log('Server is listening on port ${port}');
});
