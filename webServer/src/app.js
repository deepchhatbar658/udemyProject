const path = require('path');
const hbs =require('hbs');
const express = require('express');
const { title } = require('process');
const app = express();
const pathToPublic = path.join(__dirname, '../public')
const pathToPartial = path.join(__dirname, '../partials')
const geoCode= require('./utils/geoCode')
const foreCast= require('./utils/foreCast')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
app.set('views', path.join(__dirname, '../views'));     
app.set('view engine', 'hbs')
app.use(express.static(pathToPublic))
hbs.registerPartials(pathToPartial)
app.get('', (req, res) => {
    res.render('index',{
        title:"Weather",
        footers:"Created by deep"
    })
})
app.get('/about',(req,res)=>{
    res.render("about",{
        title:"about",
        footers:"Created by deep",

    })
})
app.get('/help',(req,res)=>{
    res.render("help",{
        title:"help",
        footers:"Created by deep",
    })
})
// app.get('/weather', (req, res) => {
//     res.send({
//         forecast: 50,
//         location: "ahmedabad"
//     })
// })
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:'please provide address'})
    }
    geoCode(req.query.address,(error,response={})=>{
        error ? console.log(error) :
        foreCast(response.longitude, response.latitude, (error, data) => {
            error ? console.log(error) :
                console.log(response.address)
            console.log("data", data)

            res.send({
                address:response.address,
                longitude:response.longitude,
                latitude:response.latitude,
                data:data,
            })
        })
    })
})
app.get('/help/*',(req,res)=>{
    res.render("404",{
        msg:"help title not found",
        footers:"created by deep",
        title:"404!"

    })
})
app.get('*',(req,res)=>{
    res.render("404",{
        msg:" page not found ",
        footers:"created by deep",
        title:"404!"
    })
})
app.listen(3000, () => {
    console.log("server is up and running")
})