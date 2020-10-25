const express = require('express');
const app = express();
const port = 3005;
const path = require('path')

//////////////////////////////////////////////////
// Middlewares ///////////////////////////////////
//////////////////////////////////////////////////
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Logger
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});
// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



//////////////////////////////////////////////////
// UI ////////////////////////////////////////////
//////////////////////////////////////////////////
app.use('/', express.static(path.join(__dirname, 'public')));

//////////////////////////////////////////////////
// Routers ///////////////////////////////////////
//////////////////////////////////////////////////
const todoRouter = require('./routes/todo');
app.use('/api', todoRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});