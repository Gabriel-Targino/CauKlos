const express = require('express');
const calculadora = require('./calc.js');
const app =express();
app.use(express.json());

app.post('/calculadora' , (req, res) => {
    
    const {prim,seg,ope} = req.body;
    console.log(prim,seg,ope)

    const resultado ={
        prim,
        seg,
        ope,
        calculadora : calculadora(prim,seg,ope), 
    };
    res.json(resultado)
});

app.listen(3000, () =>{
    console.log('App running at http://localhost:3000')
})
