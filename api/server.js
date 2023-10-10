const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}));

app.get('', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

app.post('/', (req, res)=>{
    const numberOne = Number(req.body.numberone);
    const numberTwo = Number(req.body.numbertwo);
    const addition = numberOne + numberTwo;
    res.send(`Answer ${addition}`);
})

app.post('/', (req, res)=>{
    const numberOne = Number(req.body.numberone);
    const numberTwo = Number(req.body.numbertwo);
    const subtraction = numberOne - numberTwo;
    res.send(`Answer ${subtraction}`);
})

app.post('/', (req, res)=>{
    const numberOne = Number(req.body.numberone);
    const numberTwo = Number(req.body.numbertwo);
    const multiplcation = numberOne * numberTwo;
    res.send(`Answer ${multiplcation}`);
})

app.post('/', (req, res)=>{
    const numberOne = Number(req.body.numberone);
    const numberTwo = Number(req.body.numbertwo);
    const division = numberOne / numberTwo;
    res.send(`Answer ${division}`);
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is running ${PORT}`);
})