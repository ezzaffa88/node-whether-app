const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")
const path = require("path")
const express = require("express")
const app = express()
const hbs = require("hbs")
const port = process.env.PORT || 3000
console.log(__dirname)
//console.log(__filename)
//console.log(path.join(__dirname,"../public"))
//
const pathDirectory = path.join(__dirname,"../public")
//setup static dir to use
app.use(express.static(pathDirectory))
//setup handlbars view engine 
const viewsPath = path.join(__dirname,"../templates/views")
app.set("view engine","hbs") // if want change views folder =>app.set("viewa","--dirname+--the emplacement of new directory name--")
app.set("views",viewsPath)
//setup handlbars partials 
const partialsPath = path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialsPath)

app.get("",(req,res)=>{
    const pgname = "Home"
    res.render("index",{
        pgname,
        title: "home page",
        name
    })
})
const name= " REZGUI SOFIENE"
app.get("/about",(req,res)=>{
    const pgname = "About"
    res.render("about",{
        pgname,
        title: "about page",
        name
        
    })
})
app.get("/help",(req,res)=>{
    const pgname = "Help"
    res.render("help",{
        pgname,
        title: "this is a helpfull text ",
    name
        
        
    })
})

app.get('/whether',(req,res)=>{
        if (!req.query.adress){
            return res.send({
                error:" Please provide an adress"
            })
        }else{
            geocode(req.query.adress,(err,data)=>{
                if(err){

                 return  res.send({
                        error:" Invalid adress try again !"
                 }) 
                }else{
                    forecast(data,(err,{temperature,summary,dailySummary,place})=>{
                        if(err){
                          return   res.send({
                            error:" Invalid adress try again !"
                     }) 
                        }
                        res.send({
                            place:place,
                            temperature,
                            summary,
                            dailySummary

                        })
                           
    
    
                })
                }
            
                
                
            })
        }
        






})

app.get("/help/*",(req,res)=>{
    res.render("article",{
        pgname:"help article ",
        name
    })
})
app.get("/products",(req,res)=>{
    if (!req.query.search){
        return res.send({
            error:"you must provide a search item"
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})



app.get("*",(req,res)=>{
    res.render("404",{
        pgname:"404 page",
        name
    })
})
app.listen(port,()=>{
    console.log("server is up on port "+ port)
})