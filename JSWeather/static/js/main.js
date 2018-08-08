import { getWeatherLatLng } from './dataFetcher.js';
import { printWeatherByDateTime } from './htmlLogger.js';
import { clearTable } from './htmlLogger.js';


//Make initial call once the DOM is loaded. 
document.addEventListener('DOMContentLoaded', function () {
    getWeather()
})

//Change lat and lon of "#weather_app" and then call this method to have the widget work
function getWeather() {
    var weatherDiv = document.getElementById('weather_app');
    var lat = weatherDiv.getAttribute('lat');
    var lon = weatherDiv.getAttribute('lon');

    getWeatherLatLng(lat, lon)
        .then(printToTable);
}

function printToTable(data) {
    clearTable('td-table');
    clearTable('tmrw-table');

    var todayDate = new Date();
    todayDate.setHours(18, 0, 0, 0);
    printWeatherByDateTime(data, "td-table", todayDate);
    todayDate.setHours(12, 0, 0, 0);
    printWeatherByDateTime(data, "td-table", todayDate);
    todayDate.setHours(6, 0, 0, 0);
    printWeatherByDateTime(data, "td-table", todayDate);

    var tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    tomorrowDate.setHours(18, 0, 0, 0);
    console.log(tomorrowDate);
    printWeatherByDateTime(data, "tmrw-table", tomorrowDate);
    tomorrowDate.setHours(12, 0, 0, 0);
    printWeatherByDateTime(data, "tmrw-table", tomorrowDate);
    tomorrowDate.setHours(6, 0, 0, 0);
    printWeatherByDateTime(data, "tmrw-table", tomorrowDate);
}