const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use ansers.length - 1 in order to access the most recent answer.
let answers = [];

// Data is being sent to the server via POST, in order for the server side script to use it.
app.post('/numbers', (req, res) => {
    let number1 = Number(req.body.number1);
    let number2 = Number(req.body.number2);

    console.log('numbers object:', req.body);
    if (req.body.plusBtn === '1') {
        let sum = number1 + number2;
        answers.push(sum);
    }
    console.log('answers:', answers);
    res.sendStatus(201);
});


















app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

