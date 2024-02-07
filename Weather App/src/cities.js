/*
    This serves as a placeholder for an actual API that
    has a database with all the cities and their details.

    Here we simply have a short list of cities with only
    their name, latitude and longitude.
*/

const express = require('express');
const router = express.Router();

router.get('/cities-api/', (req, res) => {
    const prefix = req.query.prefix.toLowerCase();

    const options = cities.filter(c => c.name.toLowerCase().startsWith(prefix));

    res.json(options);
});

const cities = [
    {name: "New York City", latitude: 40.7128, longitude: -74.0060},
    {name: "London", latitude: 51.5074, longitude: -0.1278},
    {name: "Paris", latitude: 48.8566, longitude: 2.3522},
    {name: "Tokyo", latitude: 35.6895, longitude: 139.6917},
    {name: "Beijing", latitude: 39.9042, longitude: 116.4074},
    {name: "Moscow", latitude: 55.7558, longitude: 37.6176},
    {name: "Istanbul", latitude: 41.0082, longitude: 28.9784},
    {name: "Dubai", latitude: 25.2769, longitude: 55.2962},
    {name: "Los Angeles", latitude: 34.0522, longitude: -118.2437},
    {name: "Shanghai", latitude: 31.2304, longitude: 121.4737},
    {name: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729},
    {name: "Cairo", latitude: 30.0444, longitude: 31.2357},
    {name: "Sydney", latitude: -33.8688, longitude: 151.2093},
    {name: "Rome", latitude: 41.9028, longitude: 12.4964},
    {name: "Mumbai", latitude: 19.0760, longitude: 72.8777},
    {name: "Seoul", latitude: 37.5665, longitude: 126.9780},
    {name: "Buenos Aires", latitude: -34.6037, longitude: -58.3816},
    {name: "Berlin", latitude: 52.5200, longitude: 13.4050},
    {name: "Bangkok", latitude: 13.7563, longitude: 100.5018},
    {name: "Mexico City", latitude: 19.4326, longitude: -99.1332},
    {name: "Hong Kong", latitude: 22.3193, longitude: 114.1694},
    {name: "Singapore", latitude: 1.3521, longitude: 103.8198},
    {name: "Toronto", latitude: 43.6511, longitude: -79.3832},
    {name: "Barcelona", latitude: 41.3851, longitude: 2.1734},
    {name: "Amsterdam", latitude: 52.3676, longitude: 4.9041},
    {name: "Vienna", latitude: 48.2082, longitude: 16.3738},
    {name: "San Francisco", latitude: 37.7749, longitude: -122.4194},
    {name: "Chicago", latitude: 41.8781, longitude: -87.6298},
    {name: "Kuala Lumpur", latitude: 3.1390, longitude: 101.6869},
    {name: "Prague", latitude: 50.0755, longitude: 14.4378},
    {name: "Madrid", latitude: 40.4168, longitude: -3.7038},
    {name: "Athens", latitude: 37.9838, longitude: 23.7275},
    {name: "Dublin", latitude: 53.3498, longitude: -6.2603},
    {name: "Budapest", latitude: 47.4979, longitude: 19.0402},
    {name: "Stockholm", latitude: 59.3293, longitude: 18.0686},
    {name: "Warsaw", latitude: 52.2297, longitude: 21.0122},
    {name: "Copenhagen", latitude: 55.6761, longitude: 12.5683},
    {name: "Lisbon", latitude: 38.7223, longitude: -9.1393},
    {name: "Helsinki", latitude: 60.1695, longitude: 24.9354},
    {name: "Oslo", latitude: 59.9139, longitude: 10.7522},
    {name: "Edinburgh", latitude: 55.9533, longitude: -3.1883},
    {name: "Moscow", latitude: 55.7558, longitude: 37.6176},
    {name: "Beirut", latitude: 33.8886, longitude: 35.4955},
    {name: "Tel Aviv", latitude: 32.0853, longitude: 34.7818},
    {name: "Cape Town", latitude: -33.9249, longitude: 18.4241},
    {name: "Johannesburg", latitude: -26.2041, longitude: 28.0473},
    {name: "Nairobi", latitude: -1.2921, longitude: 36.8219},
    {name: "Cairo", latitude: 30.0444, longitude: 31.2357},
    {name: "Marrakech", latitude: 31.6295, longitude: -7.9811},
    {name: "Auckland", latitude: -36.8485, longitude: 174.7633}
];

module.exports = router;