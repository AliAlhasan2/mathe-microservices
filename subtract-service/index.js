const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

app.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Beide Werte müssen Zahlen sein.' });
    }
    const result = a - b;
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Subtract-Service listening at http://localhost:${port}`);
});
