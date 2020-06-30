const express = require('express');
const _ = require('lodash');
const path = require('path');
const { schedule } = require('./scheduler/scheduler');
let trips = require('./trips/trips');

trips = trips.map((trip, index) => ({ id: index + 1, ...trip }));
const buses = schedule(_.cloneDeep(trips));

const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api/buses', (req, res) => {
  res.json(buses);
});

app.get('/api/buses/:id', (req, res) => {
  res.json(buses[req.params.id].trips);
});

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`trip-scheduler is listening on port ${port}`);
