const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', (req, res) => {
  res.send('Hello World!');
});

//////////////////////////////////////////////////
// Routers ///////////////////////////////////////
//////////////////////////////////////////////////
const todoRouter = require('./routes/todo');
app.use('/api', todoRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});