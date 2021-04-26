import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import getData from './lib/getData.js';
import './lib/cron.js';
//import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);


const app = express();
const PORT = process.env.PORT || 3000;
const idxPath = __dirname + '/views/index.html';
const trackerPath = __dirname + '/views/tracker.html';

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static('lib'));

app.get('/', (req,res)=>{
    res.sendFile(idxPath);
});

app.get('/tracker', (req,res)=>{
    res.sendFile(trackerPath);
});

app.get('/data', (req,res)=>{
    let data = getData();
    res.json(data);
})

app.post('/add', (req,res)=>{
    console.log(req.body.session)
    console.log(req.body.reps)
    res.sendFile(trackerPath)
})

app.listen(PORT, ()=>{console.log(`Server is running. Listening on ${PORT}`)});
// use npm run dev to start the server

