const request = require('request-promise');

const API_KEY = '881a5f65e22a9ee0159681336d9eafe9';

class Weather {
    static retrieveByCity(city, callback) {
        request({
            uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.' });
        });
    }
}

module.exports = Weather;