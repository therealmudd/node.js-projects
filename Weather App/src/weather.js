/*
    This serves as a placeholder for an actual API that
    retrieves the actual weather data of a location.

    Here we simply generate fake weather data.
*/

const express = require('express');
const router = express.Router();

router.get('/weather-api/', (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    // The api would use the coordinates to get 
    // the weather data at that location

    const weatherData = {
        data: {
            descripition: "description",
            minTemp: 0,
            maxTemp: 1,
            humidity: 0,
            windSpeed: 0,
            windDirection: 0,
        },
        metadata: {

        }
    };

    res.json(weatherData);
});

module.exports = router;