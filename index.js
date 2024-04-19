import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>YOOO</h1>')
});

app.post('/submit', (req, res) => {
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
