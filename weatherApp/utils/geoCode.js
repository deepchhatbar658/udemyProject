const request= require('request')
const geoCode =(address, callback)=>{
    const longLateUrl = `https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=9d0c2bed5eb24f65b1098ad1c0078218`
    request({url:longLateUrl,json:true},(error,response)=>{
        const longlateData = response.body.features[0].properties
        if (error) {
            callback("error",undefined)
        } else if (response.body.features.length===0) {
           callback("no data found",undefined)
        } else {
            callback(undefined,{
                longitude:longlateData.lon,
                latitude:longlateData.lat,
                address:longlateData.formatted
            })
        }
    })

}
module.exports=geoCode