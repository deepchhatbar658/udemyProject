const path = require('path');
const hbs =require('hbs');
const express = require('express');
const { title } = require('process');
const app = express();
const pathToPublic = path.join(__dirname, '../public')
const pathToPartial = path.join(__dirname, '../partials')


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
    res.send({
        address:req.query.address
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