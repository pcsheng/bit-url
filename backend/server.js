const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// mongo setup
const mongoUrl = 'mongodb://localhost:27017/bit-url';
mongoose.connect(mongoUrl);
const connection = mongoose.connection;
connection.on('open', ()=>{
    console.log('connected to mongo');
});

const api = require('./api/api');

app.post('/link', api.newLink);
app.put('/link', api.fetchLink);
app.get('/stats', api.linkStats);

app.listen(8080, () => {
  console.log('server on 8080');
});
