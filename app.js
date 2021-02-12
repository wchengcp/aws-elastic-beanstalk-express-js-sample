const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!'));
console.log(`Hello World`);
app.get('/', (req, res) => res.send('This is a test!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
