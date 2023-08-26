const request = require('request')
const url = "http://api.weatherstack.com/current?access_key=dac86668ffe75e11f9471b086c5c5782&query=28.6139,77.2090&units=f"
const longLateUrl = "https://api.geoapify.com/v1/geocode/search?text=Los%20Angeles&apiKey=9d0c2bed5eb24f65b1098ad1c0078218"
request({ url: url, json: true }, (error, response) => {
    const data = response.body;
    const current = data.current
    if (error) {
        console.log("erro from error")

    } else if (data.error) {
        console.log(data.error)

    } else {
        console.log(`currently it is ${current.temperature} hot and there is ${current.precip}% chance of rain`)
    }

})

request({ url: longLateUrl, json: true }, (error, response) => {
    const longlateData = response.body.features[0].properties
    if (error) {
        return error
    } else if (longlateData === undefined) {
        console.log("no data found")
    } else {
        console.log(`longitude=${longlateData.lon} and latitude=${longlateData.lat}`)
    }

    // console.log(longlateData.type)
})