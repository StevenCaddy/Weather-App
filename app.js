//Just starting to get api call figured out
const key = "&appid=b44a9a6a895355217088a32cf9991c9c";
let city = "Chicago";
let openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + key;

console.log(openWeatherURL);