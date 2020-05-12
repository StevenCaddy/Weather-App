//Just starting to get api call figured out
const key = "&appid=b44a9a6a895355217088a32cf9991c9c";
let city = document.getElementById("city").value;
let openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";

function searchCity(){
        city = document.getElementById('city').value;
        openWeatherURL = openWeatherURL + city + key;
        console.log(openWeatherURL);
};