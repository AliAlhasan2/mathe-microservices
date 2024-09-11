const express = require('express');
const app = express();
const port = 3006;

app.use(express.json());

app.post('/sqrt', (req, res) => {
    const { a } = req.body;
    if (typeof a !== 'number' || a <0) {
        return res.status(400).json({ error: 'Bitte geben Sie eine positive Zahl ein.' });
    }
    const result = Math.sqrt(a);
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Sqrt-Service listening at http://localhost:${port}`);
});
