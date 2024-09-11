const express = require('express');
const app = express();
const port = 3005;

app.use(express.json());

app.post('/power', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Beide Werte müssen Zahlen sein.' });
    }
    const result = Math.pow(a, b);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Power-Service listening at http://localhost:${port}`);
});
