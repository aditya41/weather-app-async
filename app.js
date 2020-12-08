const request = require('request')


const url = `https://api.openweathermap.org/data/2.5/weather?q=Ambala&appid=6b0511b434c662647a69686ef23c49fc&units=degree`
request({ url: url, json: true }, (err, res) => {

    console.log("temperature is " + res.body.main.temp + ' in ambala')
})