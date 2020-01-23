const applygeoRequest = (location,callback)=>{
const request = require("request")
const token = "pk.eyJ1IjoiZXp6YWZmYTg4IiwiYSI6ImNrNHZncGJoejBtZTgzbW4xbXl3OGpheGcifQ.5XzSKI_NK87uKtz5WhUb2Q"
const log = console.log

    
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}`
    request({url,json:true},(err,{body})=>{
        if(err){
            console.log("received " + err)

            callback({err:"cannot perform request !"},undefined)
           }
            else if(body.features.length === 0){
                callback("bad input !",undefined)
           }else {
                    
                    callback(undefined,{
                       alt :body.features[0].center[0],
                       long :body.features[0].center[1],
                       place:body.features[0].place_name
                    })
           }
       
   
   })}
   module.exports = applygeoRequest