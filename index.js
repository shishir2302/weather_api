


let x = setInterval(() => {
    let d = new Date()
    // let a= document.getElementById('wea')

    document.getElementById('wea').innerHTML = d.toLocaleTimeString()
}, 1000)

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9daa143cc4msh058a85c7962fac6p14960bjsnd133f8193d7f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather =(city) => {
    cityname.innerHTML=city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
    .then(response => response.json())
    // .then(document.getElementById('cont').innerHTML=response)
    .then(response => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.log(err))
    }

// let d=document.getElementById('submit')
submit.addEventListener("click", (e)=>{
    e.preventDefault("")
    getweather(city.value)
})
getweather("Delhi")