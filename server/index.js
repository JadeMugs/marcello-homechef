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
  res.sendFile(path.join(__dirname, 'build', 'index.html'));

  const menu = [
    {
      // img: menu1,
      title: 'Menu di primavera',
    },
    {
      // img: menu1,
      title: 'Menu di primavera',
    },
    {
      // img: menu1,
      title: 'Menu di primavera',
    },
  ];
  res.json(menu);
});

/**
 * HTTP Server
 */
httpServer.listen(PORT, () => 'Server started!');
