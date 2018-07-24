/*Using the array method filter to filter out the correct element from the json*/
/*Method takes json-data, the id of the table row and the date */
export function printWeatherByDateTime(json, tbID, datetime) {
    var time = datetime.getHours();
    var tbl = document.getElementById(tbID);

    var weatherInfo = json.timeSeries.filter(elem => new Date(elem.validTime).toISOString() === datetime.toISOString()) //Creating a new Date() from the date given by SMHI and comparing the two, filtering out the one we are looking for
    if (weatherInfo.length != 0) //Make sure we had a match
    {
        var temperature = weatherInfo[0].parameters[1].values[0];
        var windDir = weatherInfo[0].parameters[3].values[0];
        var windStr = weatherInfo[0].parameters[4].values[0];
        var sky = weatherInfo[0].parameters[1].values[0];
        var humidity = weatherInfo[0].parameters[5].values[0];



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