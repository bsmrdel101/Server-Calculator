const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let answers = [];


app.post('/numbers', (req, res) => {
    console.log('numbers object:', req.body);
    answers.push(answers);
    res.sendStatus(201);
});


















app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

