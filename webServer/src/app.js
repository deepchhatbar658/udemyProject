const path = require('path');
const express = require('express');
const app = express();
const pathToPublic = path.join(__dirname, '../public')



// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
app.set('views', path.join(__dirname, '../views'));     
app.set('view engine', 'hbs')
app.use(express.static(pathToPublic))

app.get('', (req, res) => {
    res.render('index',{
        title:"welcome to index"
    })
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/help',(req,res)=>{
    res.render("help")
})
app.get('/weather', (req, res) => {
    res.send({
        forecast: 50,
        location: "ahmedabad"
    })
})
app.listen(3000, () => {
    console.log("server is up and running")
})