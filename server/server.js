const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




















app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

