//Just starting to get api call figured out
const key = "&appid=b44a9a6a895355217088a32cf9991c9c";
let city = document.getElementById("city").value;
let openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const unitImp = "&units=imperial";
const unitMet = "&units=metric";
const mode = "&mode=xml";
let slider = document.getElementById("myRange");
let output = document.getElementById('demo');

output.innerHTML = "Imperial";
//openWeatherURL = openWeatherURL + city + unitImp + key;
//console.log(openWeatherURL);

//display the units of slider?
slider.oninput = function() {

        if (this.value == 1){
                output.innerHTML = "Imperial";
        } else if (this.value == 2){
                output.innerHTML = "Metric";
        }
        slider = this.value;
        return this.value;
};

// function runs after pushing submit btn and adds the city to
function searchCity(){
        city = document.getElementById('city').value;
        console.log(slider);
        if (slider == 1) {
                openWeatherURL = openWeatherURL + city + unitImp + key;
                console.log(openWeatherURL);
                fetch(openWeatherURL)
                        .then(response => response.json())
                        .then(data => document.getElementById('showResults')
                                .innerHTML = "This is the temperature " + data.main.temp);
                
        } else {
                openWeatherURL = openWeatherURL + city + unitMet + key;
                console.log(openWeatherURL);
                fetch(openWeatherURL)
                        .then(response => response.json())
                        .then(data => document.getElementById('showResults')
                                .innerHTML = "This is the temperature " + data.main.temp);
        }

        openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
        
};
