const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./taskController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', taskRoutes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);   
})