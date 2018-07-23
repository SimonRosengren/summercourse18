(function () {
    'use strict';

    //Make initial call once the DOM is ready. JQuery used for simpler adn cleaner code.
    //$(function()) is short hand for $(document).ready(function())
    $(function () {
        getWeather();
    })

    function getWeather(lat, lng) {
        fetch('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/13.0038/lat/55.6050/data.json')
            .then(response => response.json()) //Send as json down the chain 
            .then(printToTable)
    }

    function parseJSONData() {

    }

    function printToTable(data) {
        var todayDate = new Date();
        todayDate.setHours(6, 0, 0, 0);
        printWeatherByDateTime(data, "td-tr-6", todayDate);
        todayDate.setHours(12, 0, 0, 0);
        printWeatherByDateTime(data, "td-tr-12", todayDate);
        todayDate.setHours(18, 0, 0, 0);
        printWeatherByDateTime(data, "td-tr-18", todayDate);

        var tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        tomorrowDate.setHours(6, 0, 0, 0);
        printWeatherByDateTime(data, "tmrw-tr-6", tomorrowDate);
        tomorrowDate.setHours(12, 0, 0, 0);
        printWeatherByDateTime(data, "tmrw-tr-12", tomorrowDate);
        tomorrowDate.setHours(18, 0, 0, 0);
        printWeatherByDateTime(data, "tmrw-tr-18", tomorrowDate);
    }

    /*Using the array method filter to filter out the correct element from the json*/
    /*Method takes json-data, the id of the table row and the date */
    function printWeatherByDateTime(json, trID, datetime) {
        var time = datetime.getHours();
        var weatherInfo = json.timeSeries.filter(elem => new Date(elem.validTime).toISOString() === datetime.toISOString()) //Creating a new Date() from the date given by SMHI and comparing the two, filtering out the one we are looking for
        if (weatherInfo.length != 0) //Make sure we had a match
        {
            var temperature = weatherInfo[0].parameters[1].values[0];
            var windDir = weatherInfo[0].parameters[3].values[0];
            var windStr = weatherInfo[0].parameters[4].values[0];
            var sky = weatherInfo[0].parameters[1].values[0];
            var humidity = weatherInfo[0].parameters[5].values[0];
            $('#' + trID).append(
                '<td>' + time + '</td>' +
                '<td>' + temperature + '</td>' +
                '<td>' + windDir + '</td>' +
                '<td>' + windStr + '</td>' +
                '<td>' + sky + '</td>' +
                '<td>' + humidity + '</td>'
            );
        }
        else {
            var error = "No data found";
            $('#' + trID).append(
                '<td>' + time + '</td>' +
                '<td>' + error + '</td>' +
                '<td>' + error + '</td>' +
                '<td>' + error + '</td>' +
                '<td>' + error + '</td>' +
                '<td>' + error + '</td>' 
            );
        }
    }

    function log(data) {
        console.log(data)
    }

})();

