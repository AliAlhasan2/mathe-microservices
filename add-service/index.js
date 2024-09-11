const express = require('express');
const app=express();
const port =3001;

app.use(express.json());

app.post('/add', (req,res) =>{
   const {a,b} =req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both inputs must be numbers' });
    }
    const result = a + b;
    res.json({ result });
});

app.listen(port,() => {
    console.log(`Add-Service listening at http://localhost:${port}`)
});