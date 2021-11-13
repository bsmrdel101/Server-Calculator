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
    } else if (req.body.subBtn === '1') {
        let diff = number1 - number2;
        answers.push(diff);
    } else if (req.body.multiplyBtn === '1') {
        let product = number1 * number2;
        answers.push(product);
    } else {
        let quotient = number1 / number2;
        answers.push(quotient);
    }
    console.log('answers:', answers);
    console.log('history', req.body.history);
    res.sendStatus(201);
});

// Clear answers array
app.post('/history', (req, res) => {
    answers = [];
    res.sendStatus(201);
});

// Retrieve answers and bring them back to client side.
app.get('/numbers', (req, res) => {
    res.send(answers);
});

















app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

