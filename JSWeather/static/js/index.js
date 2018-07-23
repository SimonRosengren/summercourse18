(function() {
    'use strict';

    //Make initial call once the DOM is ready. JQuery used for simpler adn cleaner code.
    //$(function()) is short hand for $(document).ready(function())
    $(function(){
        getWeather();
    })

    function getWeather(lat, lng){
        fetch('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json ')
        .then(response => response.json()) //Send as json down the chain 
        .then(printToTable)
  //      .then(getWeatherFromTime)
    //    .then(log)
    }

    function parseJSONData(){

    }

    function printToTable(data){
        console.log(data)
        printWeatherByDateTime(data, "testtr", "2018-07-23T10:00:00Z")
    }

    /*Using the array method filter to filter out the correct element from the json*/
    function printWeatherByDateTime(json, trID, datetime){
        var weatherInfo = json.timeSeries.filter(elem => elem.validTime === datetime)
        var time = datetime;
        console.log(weatherInfo[0].parameters)
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

    function log(data){ 
        console.log(data)
    }

})();

/*
Se JSON och fortsätt bara full i med fler katergorier och appenda detta till table
*/