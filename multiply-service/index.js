const express = require('express');
const app=express();
const port =3003;

app.use(express.json());

app.post('/multiply', (req,res) =>{
    const {a,b} =req.body;
    const result=a*b;
    res.json({result})
});

app.listen(port,() => {
    console.log(`Multiply-Service listening at http://localhost:${port}`)
});