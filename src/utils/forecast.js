const request = require('request')

const forcast = (x, y, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e353f4659dbf1179fbb44ffdaf2a14b0&query=' + x + ',' + y + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather API', undefined)
        } else if (body.error) {
            callback('Unable to find weather from location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + " It is currently " + body.current.temperature + " degrees F and feels like " + body.current.feelslike)
        }
    })
}

module.exports = forcast