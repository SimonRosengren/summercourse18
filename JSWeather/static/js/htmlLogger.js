/*Using the array method filter to filter out the correct element from the json*/
/*Method takes json-data, the id of the table row and the date */
export function printWeatherByDateTime(json, tbID, datetime) {
    var time = datetime.getHours();
    var tbl = document.getElementById(tbID);

    var weatherInfo = json.timeSeries.filter(elem => new Date(elem.validTime).toISOString() === datetime.toISOString()) //Creating a new Date() from the date given by SMHI and comparing the two, filtering out the one we are looking for
    if (weatherInfo.length != 0) //Make sure we had a match
    {
        console.log(weatherInfo)
        var temperature = weatherInfo[0].parameters[1].values[0] + " C";
        var windDir = createArrow(weatherInfo[0].parameters[3].values[0]);
        var windStr = weatherInfo[0].parameters[4].values[0] + "m/s";
        var sky = parseSkyInfo(weatherInfo[0].parameters[18].values[0]);
        var humidity = weatherInfo[0].parameters[5].values[0] + "%";

        tbl.insertRow(1)
        tbl.rows[1].innerHTML =
            '<td>' + time + '</td>' +
            '<td>' + temperature + '</td>' +
            '<td>' + windDir + '</td>' +
            '<td>' + windStr + '</td>' +
            '<td>' + sky + '</td>' +
            '<td>' + humidity + '</td>'
    }
    else {
        var error = "No data found";
        tbl.insertRow(1)
        tbl.rows[1].innerHTML =
            '<td>' + time + '</td>' +
            '<td>' + error + '</td>' +
            '<td>' + error + '</td>' +
            '<td>' + error + '</td>' +
            '<td>' + error + '</td>' +
            '<td>' + error + '</td>'
    }
}

//Loops the array of rows in table backwards deleting all but the first one "the heading"
export function clearTable(id) {
    var table = document.getElementById(id);
    console.log(table.rows.length);
    for (var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i)
    }
}

function createArrow(angle) {
    return '<div class="arrow" style="transform: rotate(' + angle + 'deg);"></div>'
}

function parseSkyInfo(index) {
    switch (index) {
        case 1:
            return "Clear sky"
            break;
        case 2:
            return "Nearly clear sky"
            break;
        case 3:
            return "Variable cloudiness"
            break;
        case 4:
            return "Halfclear sky"
            break;
        case 5:
            return "Cloudy sky"
            break;
        case 6:
            return "Overcast"
            break;
        case 7:
            return "Fog"
            break;
        case 8:
            return "Rain showers"
            break;
        case 9:
            return "Thunderstorm"
            break;
        case 10:
            return "Light sleet"
            break;
        case 11:
            return "Snow showers"
            break;
        case 12:
            return "Rain"
            break;
        case 13:
            return "Thunder"
            break;
        case 14:
            return "Sleet"
            break;
        case 15:
            return "Snowfall"
            break;
        default:
            return "No info"
    }
}