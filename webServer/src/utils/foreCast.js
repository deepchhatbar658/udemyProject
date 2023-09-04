const request = require("request");

const foreCast=(long,lat,callback)=>{
    const url =`http://api.weatherstack.com/current?access_key=dac86668ffe75e11f9471b086c5c5782&query=${long},${lat}&units=f`
    request({url:url,json:true},(error,response)=>{
        const data = response.body;
        const current = data.current
        if (error) {
            callback("erro from error",undefined)
    
        } else if (data.error) {
            callback(data.error,undefined)
    
        } else {
            callback(undefined,`currently it is ${current.temperature} hot and there is ${current.precip}% chance of rain`)
        }
    })
}
module.exports = foreCast;