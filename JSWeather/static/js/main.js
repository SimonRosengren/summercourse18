import { getWeather } from './dataFetcher.js';
import { getWeatherLatLng } from './dataFetcher.js';
import { printWeatherByDateTime } from './htmlLogger.js';
import { clearTable } from './htmlLogger.js';


//Make initial call once the DOM is loaded. 
document.addEventListener('DOMContentLoaded', function () {
    //Attach listener to form
    document.getElementById('form').addEventListener('submit', function(event){
        event.preventDefault();
        var lat = document.getElementById('lat').value;
        var lng = document.getElementById('lng').value;
        getWeatherLatLng(lat, lng)
        .then(printToTable)
    })

    getWeather()
    .then(printToTable);
})

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
    printWeatherByDateTime(data, "tmrw-table", tomorrowDate);
    tomorrowDate.setHours(12, 0, 0, 0);
    printWeatherByDateTime(data, "tmrw-table", tomorrowDate);
    tomorrowDate.setHours(6, 0, 0, 0);
    printWeatherByDateTime(data, "tmrw-table", tomorrowDate);

}