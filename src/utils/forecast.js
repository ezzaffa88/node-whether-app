const request = require("request")
const token = "pk.eyJ1IjoiZXp6YWZmYTg4IiwiYSI6ImNrNHZncGJoejBtZTgzbW4xbXl3OGpheGcifQ.5XzSKI_NK87uKtz5WhUb2Q"
const log = console.log

const apllyWhetherRequest = ({place,long,alt},callback)=>{

  //  console.log(`Maybe you mean  ${place}`)
    const url = `https://api.darksky.net/forecast/a68660f53d103d2d689dcd9d9cd5b99d/${long},${alt}?units=si`
//some es6 syntax destructring body from response
    request({url:url,json:true},(err,{body})=>{
        if(err){
            callback({err:"cannot connect to whether service"},undefined)
        }else if (body.error){
            callback("bad request input",undefined)
        }
        else {
            callback(undefined,{
                temperature: body.currently.temperature,
                summary:body.daily.summary,
                dailySummary:body.daily.data[0].summary,
                place
            })
           
        }
     
    
})}
module.exports = apllyWhetherRequest