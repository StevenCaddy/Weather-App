//Just starting to get api call figured out
const key = "&appid=b44a9a6a895355217088a32cf9991c9c";
let city = document.getElementById("city").value;
let openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const unitImp = "&units=imperial";
const unitMet = "&units=metric";

// function runs after pushing submit btn and adds the city to
function searchCity(){
        city = document.getElementById('city').value;
        openWeatherURL = openWeatherURL + city + unitImp + key;
        console.log(openWeatherURL);
        openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";

};