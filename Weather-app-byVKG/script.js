const yourWeather = document.querySelector(".your-weather");
const SearchWeather = document.querySelector(".search-weather");
const grantLocation = document.querySelector(".grant-location");
const searchTab = document.querySelector(".search-tab");
const grantLocationBtn = document.querySelector("[data-grantLocationBtn]");
const loader = document.querySelector(".loader");
const weatherContainer = document.querySelector(".weather-info-container");
const desc = document.querySelector(".desc");

const form = document.querySelector("form");


const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";


let currentTab = yourWeather;
currentTab.classList.add("current-tab");
grantLocation.classList.add("active");

const switchTab = (clickedTab) =>{
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
        
        if(!searchTab.classList.contains("active")){
            weatherContainer.classList.remove("active")
            grantLocation.classList.remove("active");
            searchTab.classList.add("active");
        }else{
            searchTab.classList.remove("active");
            weatherContainer.classList.add("active");
            grantLocation.classList.add("active");

            getfromSesionStorage();
        }
    }
}

function getfromSesionStorage(){
    const localCoordinates = sessionStorage.getItem('user-coordinates');
    if(!localCoordinates){
        grantLocation.classList.add('active');
        weatherContainer.classList.remove('active');
        
    }else{
        const coordinates = JSON.parse(localCoordinates);
        // console.log(coordinates);
        
        fetchUserinfo(coordinates);
    }
}

const renderWeatherInfo = (data) =>{

    loader.classList.remove("active");

    const temp = document.querySelector(".temp");
    const windspeed = document.querySelector(".windspeed");
    const humadity = document.querySelector(".humadity");
    const cloud = document.querySelector(".cloud");
    const cityName = document.querySelector(".city-name");
    const countryIcon = document.querySelector(".country-flag");
    const weatherIcon = document.querySelector(".weather-icon");

    console.log(data);
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`
    weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon.toLowerCase()}.png`;
    desc.innerText = data?.weather?.[0]?.description;
    
    cityName.innerText = data.name;
    windspeed.innerText = `${data.wind.speed} km/h`;
    humadity.innerText = `${data.main.humidity}%`;
    temp.innerHTML = `<big>${data.main.temp}</big>°C`;
    cloud.innerText = `${data.clouds.all}%`;
}

const fetchUserinfo = async(position) =>{
    const {lat, lon} = position;
    // console.log(lat, lon)
    // invisible location container
    grantLocation.classList.remove("active");

    // visible loader
    loader.classList.add("active");

    // api call
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
            ); 
        const data = await res.json();
        loader.classList.remove('active');
        // active weather info container
        weatherContainer.classList.add("active");

        renderWeatherInfo(data);
    } catch (error) {
        console.error(error);
        loader.classList.remove('active');
    }


}

const getLocation = () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        alert("Geolocation is not supported by your browser.");
    }
}

const showPosition = (position) =>{
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserinfo(userCoordinates);
}

grantLocationBtn.addEventListener("click", getLocation)

yourWeather.addEventListener("click", () =>{
    switchTab(yourWeather)
});
SearchWeather.addEventListener("click", () =>{
    switchTab(SearchWeather)
});


form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const searchedCity = document.querySelector(".city-search").value;

    if(searchedCity == "") return

    feachedSearchInfo(searchedCity);
})

async function feachedSearchInfo (city) {
    grantLocation.classList.remove("active");
    weatherContainer.classList.remove("active");
    loader.classList.remove("active");
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        const data = await res.json();
        // console.log(data);
        
        loader.classList.add('active');
        weatherContainer.classList.add('active');
        console.log(data);
        
        renderWeatherInfo(data);
    } catch (error) {
        console.log(error);
        
    }
}