import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const ___dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
let bandname = '';

app.use(bodyParser.urlencoded({ extended: true }));

function bandNameGenerator(req, res, next) {
    console.log(req.body);
    bandname = req.body['street'] + req.body['pet'];
    next();
}

app.use(bandNameGenerator);

app.get('/', (req, res) => {
    res.sendFile(___dirname + '/index.html');
})

app.post('/submit', (req, res) => {
    res.send(`<h1>Your band name is ${bandname}</h1>`)
})


app.listen(3000, () => {
    console.log('Server listening on port 3000');
})