function init() {
    if(localStorage.city !== null && localStorage.city !== "undefined" && localStorage.city !== undefined){
        getWeather(localStorage.city);
        showDefaultCity();
    } else {
        localStorage.city = "Rexburg";
        getWeather("rexburg");
        showDefaultCity();
    }
    var options = {
        types: ['(cities)']
    };
    var input = document.getElementById('searchTextField');
    var autocomplete = new google.maps.places.Autocomplete(input, options);
}

function getWeather(city) {
    // var temp
    var weather = document.getElementById('weather-info');
    weather.innerHTML = "<div class='loader'></div>";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            w = JSON.parse(xhttp.responseText);
            handleWeather(w);
        } else if (this.readyState == 4 && this.status !== 200) {
            handleError();
        }
    };
    var appid = "5f880474d3248067ea84617f8ed6d0c9";
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid;
    xhttp.open("GET", url, true);
    xhttp.send();
}

function handleWeather(w) {
    var weather = document.getElementById('weather-info');
    weather.innerHTML = '<p id="city"></p><h1 id="temp"></h1><p id="desc"></p>';
    var city = document.getElementById("city");
    var temp = document.getElementById("temp");
    var desc = document.getElementById("desc");
    var f = KToF(w.main.temp);
    var t = parseInt(f);
    var img = "<img src='http://openweathermap.org/img/w/"+w.weather[0].icon+".png' alt='weather icon'>"; 
    city.innerHTML = "In "+w.name+" it is:";
    temp.innerHTML = img+t+"°F";
    desc.innerHTML = w.weather[0].description;
}

function handleError() {
    var weather = document.getElementById('weather-info');
    weather.innerHTML = '<p id="city"></p><h1 id="temp"></h1><p id="desc"></p>';
    var city = document.getElementById("city");
    var temp = document.getElementById("temp");
    var desc = document.getElementById("desc");
    var img = "";
    var text = document.getElementById("searchTextField").value;
    var c = text.split(',')[0];
    city.innerHTML = "Could not find weather for "+c;
    temp.innerHTML = "--°F";
    desc.innerHTML = "--";
}

function checkWeather(){
    var text = document.getElementById("searchTextField").value;
    var city = text.split(',')[0];
    sessionStorage.city = city;
    getWeather(city);
}

function KToF(temp) {
  return ((temp-273.15)*1.8)+32;
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault();
        checkWeather();
    }
}

function saveCity() {
    console.log("City Saved");
    localStorage.city = sessionStorage.city;
    showDefaultCity();
}

function loadSavedCity(params) {
    getWeather(localStorage.city);
}

function showDefaultCity() {
    document.getElementById("defaultCity").innerHTML = 
    "Default City: " + localStorage.city;
}