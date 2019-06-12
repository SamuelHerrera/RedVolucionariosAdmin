const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
require('dotenv').config();

// Parsers
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, '/dist/')));
app.use(express.static(path.join(__dirname, '/dist/RedVolucionariosAdmin/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/RedVolucionariosAdmin/index.html'));
});

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
