const express = require('express');
const path = require('path');
const trips = require('./trips/trips');
const buses = require('./scheduler/scheduler');
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(bodyParser.json());

app.get('/api/buses', (_, res) => {
  res.json(buses);
})

app.post('/api/trips', (_, res) => {
  res.json(trips);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`trip-scheduler is listening on port ${port}`);
