const express = require('express');
const app=express();
const port =3004;

app.use(express.json());

app.post('/divide', (req,res) =>{
    const {a,b} =req.body;
    const result=a/b;
    res.json({result})
});

app.listen(port,() => {
    console.log(`Divide-Service listening at http://localhost:${port}`)
});