const express = require('express');
// const path = require('path');
const { buses, trips } = require('./data');

const app = express();
// app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/api/buses', (req, res) => {
  res.json(buses);
});

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`trip-scheduler is listening on port ${port}`);
