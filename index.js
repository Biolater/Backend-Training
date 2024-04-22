import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path'
import { fileURLToPath } from 'url';

const ___dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs', {
        dayType: 'a weekday',
        advice: "Don't forget to eat healthy",
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
