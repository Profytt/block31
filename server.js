const express = require('express');
const app = express();
const PORT = 3000; // Or any port you prefer

app.get('/', (req, res) => {
    res.send('Hello from Express.js!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});