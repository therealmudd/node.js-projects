const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const weatherRoute = require('./weather');
const citiesRoute = require('./cities');

const app = express();
const PORT = 3000;

const weatherApiKey = process.env.WEATHER_API_KEY;
const weatherUrl = `http://localhost:${PORT}/weather-api`;

const citiesApiKey = process.env.CITIES_API_KEY;
const citiesUrl = `http://localhost:${PORT}/cities-api`;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use("/", weatherRoute);
app.use("/", citiesRoute);

app.get('/weather', async (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    const response = await axios.get(
        weatherUrl 
        + '?latitude=' + latitude 
        + '&longitude=' + longitude
        + '&api_key=' + weatherApiKey
    );

    res.send(response.json());
});

app.get('/cities', async (req, res) => {
    const prefix = req.query.prefix.toLowerCase();

    const response = await axios.get(
        citiesUrl 
        + '?prefix=' + prefix 
        + '&api_key=' + citiesApiKey
    );

    res.send(response);
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});