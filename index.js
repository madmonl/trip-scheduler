const express = require('express');
const path = require('path');
const trips = require('./trips/trips');
const bodyParser = require('body-parser');
const buses = require('./scheduler/buses');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());

console.log(buses);
app.get('/api/buses', (_, res) => {
  res.json(buses);
})

app.post('/api/trips', (_, res) => {
  res.json(trips);
});

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`trip-scheduler is listening on port ${port}`);
