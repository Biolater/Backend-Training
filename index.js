import express from 'express';
import morgan from 'morgan';
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log('Request method', req.method);
  console.log('Requested url', req.url);
  next();
}

app.use(logger);

app.get('/', (req, res) => {
  res.send('<h1>YOOO</h1>')
});

app.post('/submit', (req, res) => {
  console.log(req.body)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
