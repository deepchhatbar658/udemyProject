const foreCast = require('./utils/foreCast')

const geoCode = require('./utils/geoCode.js')
if(process.argv.length==2 ){
    return console.log("please provide address")
}
geoCode(process.argv[2], (error, response) => {
    error ? console.log(error) :
        foreCast(response.longitude, response.latitude, (error, data) => {
            error ? console.log(error) :
                console.log(response.address)
            console.log("data", data)

        })
})