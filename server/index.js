const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');

// const bodyParser = require('body-parser')
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true }));

/**
 * Returns React build
 */
app.use(express.static('../build'));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/menu', function (req, res) {
  // TODO mock data
  const menu = [
    { title: 'Menu di primavera' },
    { title: 'Menu di primavera' },
    { title: 'Menu di primavera' },
  ];
  res.json(menu);
});

app.post('/login', function (req, res) {
  // TODO
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.json({ user: 'user', token: 'grvtrghthtrh' });
});

/**
 * HTTP Server
 */
httpServer.listen(PORT, () => 'Server started!');
