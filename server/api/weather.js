let express = require('express');
let Weather = require('../models/weather');

let router = express.Router();

router.get('/:city', function (req, res) {
    let city = req.params.city;

    Weather.retrieveByCity(city, function (err, weather) {
        if (err)
            return res.json(err);
        return res.json(weather);
    });
});

module.exports = router;