console.log("app.js is runnimg !")

const el = document.getElementById("toAnimate")
setInterval(() => {
    el.animate([
        {
            opacity : 1

        }, 
        {
            opacity : 0.5,
            offset: 0.7
        },
        {
            opacity: 0,

        }
    ],500)
}, 1000);
const adress = document.getElementById("adress")
const btn = document.getElementById("fire")
const temperature = document.getElementById("temperature")
// const sum = document.getElementById("summary")
const sum = document.querySelector("#summary")
const place = document.getElementById("place")
btn.addEventListener("click",(e)=>{
    //console.log(e.target)
    const p = document.createElement("p")
    p.textContent = "Loading ..."
    btn.appendChild(p)
    fetch(`http://localhost:3000/whether?adress=${adress.value}`).then((response)=>{

        response.json().then((data)=>{
              if(!data.err){
                temperature.innerHTML=data.temperature
                sum.innerHTML = data.summary
                place.innerHTML=data.place
                const elemData = document.querySelector("#forecast");
             elemData.style.backgroundColor = "rgb(224, 163, 224)";
             btn.removeChild(p)

              }else{
                  console.log ("error")
              }
          })
      })
    
})
   

   