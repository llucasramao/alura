const express = require('express')
let app = express();

app.use(express.static("."));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT, ()=>{ // Ler a variável de ambiente chamada PORT
    console.log("Server is listening on port 3000")
})