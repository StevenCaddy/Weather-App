
$("#submit").on("click", function(event) {
        event.preventDefault();
        console.log("i clicked it");
});

//Just starting to get api call figured out
const key = "&appid=b44a9a6a895355217088a32cf9991c9c";
let city = $("#city");
let openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + key;

$.ajax({
        url: openWeatherURL,
        method: "GET"
}).done(function(response) {
        alert("openWeatherAPI");
        var results = response.data;        
});

console.log(openWeatherURL);
console.log(city);