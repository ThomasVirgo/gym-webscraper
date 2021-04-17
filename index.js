const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;
const idxPath = __dirname + '/views/index.html';

app.get('/', (req,res)=>{
    res.sendFile(idxPath);
})

app.listen(PORT, ()=>{console.log(`Server is running. Listening on ${PORT}`)});
// use npm run dev to start the server

