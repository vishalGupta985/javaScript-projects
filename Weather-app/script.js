//const api = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'



//const api = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}'

// https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric


const userTab = document.querySelector("[data-userTab]");
const searchTab = document.querySelector("[data-searchTab]");

const userContainer = document.querySelector("[data-userContainer]");
// console.log(userContainer);

// const userInfoTab = document.querySelector(".your-weather");
const searchContainer = document.querySelector(".search-weather");
// console.log(searchContainer);

const grantLocation = document.querySelector("[data-grantLocation]");


const loadingContainer = document.querySelector(".loading-container");

const searchBtn = document.querySelector(".search-btn");


const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

let currentTab = userTab;
currentTab.classList.add('tab');
// getfromSesionStorage();


// switchin user

const switchTab = (clickedTab) =>{
    // console.log(clickedTab);
    // if(clickedTab != userTab){
    //     searchTab.classList.add('tab');
    //     userTab.classList.remove('tab');
        
    //     userContainer.style.opacity = 0;
    //     searchContainer.style.opacity = 1;
    //     // currentTab.classList.remove('tab');
    // }else{
    //     // currentTab.classList.add('tab');
    //     searchTab.classList.remove('tab');
    //     userTab.classList.add('tab');

    //     userContainer.style.opacity = 1;
    //     searchContainer.style.opacity = 0;
    //     // console.log("user tab");
    // }

    if(clickedTab != currentTab){
        currentTab.classList.remove('tab');
        currentTab = clickedTab;
        currentTab.classList.add('tab');

        if(!searchContainer.classList.contains('active')){
            userContainer.classList.remove('active');
            grantLocation.classList.add('active');
            searchContainer.classList.add('active');
        }else{
            userContainer.classList.remove('active');
            grantLocation.classList.remove('active');
            searchContainer.classList.remove('active');

            getfromSesionStorage();       
        }
    }
}

// check coordinates

function getfromSesionStorage(){
    const localCoordinates = sessionStorage.getItem('user-coordinates');
    if(!localCoordinates){
        grantLocation.classList.add('active');
        userContainer.classList.remove('active');
        
    }else{
        const coordinates = JSON.parse(localCoordinates);
        console.log(coordinates);
        
        fetchWeatherinfo(coordinates);
    }
}


// api for user weather

async function fetchWeatherinfo(coordinates){
    const {lat, lon} = coordinates;
    // invisible location container
    // console.log(grantLocation);
    
    grantLocation.classList.add('active');
    // visible loading
    loadingContainer.classList.add('active');


    try {
        const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );      
        
        const data = await res.json();
        console.log(data);
        loadingContainer.classList.remove('active');
        userContainer.classList.add('active');
        renderWeatherinfo(data);
    } catch (error) {
        console.error(error);
        loadingContainer.classList.remove('active');
    }

}

const renderWeatherinfo = (data) =>{
    const cityName = document.querySelector('[data-countryName]');
    const countryIcon = document.querySelector('[data-countryIcon]');
    const desc = document.querySelector('[data-weatherDesc]');
    const weatherIcon = document.querySelector('[data-weatherIcon]');
    // console.log(weatherIcon);
    
    const weatherTemp = document.querySelector('[data-weatherTemp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity]');
    const cloud = document.querySelector('[data-cloud]');


    // putting value dynamically
    cityName.innerText = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`
    desc.innerText = data?.weather?.[0]?.description;
    // console.log();
    
    weatherIcon.src = `https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon.toLowerCase()}.png`;
    // console.log(weatherIcon);
    
    weatherTemp.innerText = data?.main?.temp + "°C";
    windspeed.innerText = data?.wind?.speed;
    humidity.innerText = data?.main?.humidity;
    cloud.innerText = data?.clouds?.all;
}

const locationAceesBtn = document.querySelector('[data-getlocationAceess]');

function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
}

function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchWeatherinfo(userCoordinates)
}



locationAceesBtn.addEventListener('click',getLocation);





userTab.addEventListener("click", () =>{
    switchTab(userTab);
})
searchTab.addEventListener("click", () =>{
    switchTab(searchTab);
})

const searchInput = document.querySelector("[data-searchInput]");

document.querySelector('form').addEventListener("submit", (e) =>{
    e.preventDefault();
    if(searchInput.value == "") return;

    fetchSearchWeatherInfo(searchInput.value);
})

const fetchSearchWeatherInfo = async(city) => {
    loadingContainer.classList.remove('active');
    userContainer.classList.remove('active');
    grantLocation.classList.add('active');

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

        const data = await res.json();
        // console.log(data);
        
        loadingContainer.classList.remove('active');
        userContainer.classList.add('active');
        console.log(data);
        
        renderWeatherinfo(data);
    } catch (error) {
        console.log(error);
        
    }
}