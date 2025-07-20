const apiKey="9cf7b7bc0f0b24506fa17ad7295adf17";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector("#search-box");
const searchBtn=document.querySelector(".search-icon");
const icon=document.querySelector(".sunny");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status === 404) {
        alert(" City not found. Try again.");
        return;
    }
    var data = await response.json();

    const cityEl = document.querySelector(".city h2");
    cityEl.textContent = data.name;
    cityEl.classList.add("fade-in");
    setTimeout(() => {
        cityEl.classList.remove("fade-in");
    }, 500);


    const resultBox = document.querySelector(".result-container");
    resultBox.classList.add("slide-in");
    setTimeout(() => {
        resultBox.classList.remove("slide-in");
    }, 600);


    const tempEl = document.querySelector(".temperature h1");
    tempEl.classList.add("pulse");
    setTimeout(() => tempEl.classList.remove("pulse"), 500);




    document.querySelector(".temperature h1").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-text").textContent = data.main.humidity + "%";
    document.querySelector(".wind-text").textContent = data.wind.speed + " km/h";



    const icon = document.querySelector(".sunny");
    const condition = data.weather[0].main;

    if (condition === "Clouds") {
        icon.src = "images/cloudy.png";
    } else if (condition === "Rain") {
        icon.src = "images/heavy-rain.png";
    } else if (condition === "Mist") {
        icon.src = "images/fog.png";
    } else if (condition === "Snow") {
        icon.src = "images/snow(1).png";
    } else if (condition === "Clear") {
        icon.src = "images/clear-sky.png";
    } else if (condition === "Tornado") {
        icon.src = "images/tornado.png";
    } else if (condition === "Thunderstorm") {
        icon.src = "images/storm.png";
    }
}


searchBtn.addEventListener("click",()=>{
    const city=searchBox.value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    checkWeather(searchBox.value);
});







