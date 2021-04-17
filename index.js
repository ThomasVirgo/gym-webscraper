import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import getData from './lib/getData.js';
import './lib/cron.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);


const app = express();
const PORT = process.env.PORT || 3000;
const idxPath = __dirname + '/views/index.html';

app.use(express.static('lib'));

app.get('/', (req,res)=>{
    res.sendFile(idxPath);
});

app.get('/data', (req,res)=>{
    let data = getData();
    res.json(data);
})

app.listen(PORT, ()=>{console.log(`Server is running. Listening on ${PORT}`)});
// use npm run dev to start the server

