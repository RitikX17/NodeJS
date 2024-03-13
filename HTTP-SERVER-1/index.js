const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 8080;
app.use(bodyParser.json())
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("Hello World  HEEHHEH")
    
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})