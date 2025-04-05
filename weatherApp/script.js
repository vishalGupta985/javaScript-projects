const API_KEY = `56d063fc27bc429bb5a104253241307`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    const response = await fetch(url);
    const data = await response.json();
    return showWeather(data);
}

const showWeather = (data) => {
    if (data.code == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src=${data.current.condition.icon}>
        </div>
        <div>
            <h2>${data.current.temp_c} ℃</h2>
            <h4> </h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    (e) =>{
        e.preventDefault();
        getWeather(search.value);
    }
)



// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`