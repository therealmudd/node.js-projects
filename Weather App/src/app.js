const express = require('express');
const http = require('https');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});