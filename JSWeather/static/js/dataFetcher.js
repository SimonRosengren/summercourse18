export function getWeatherLatLng(lat, lng) {
    if(isNaN(lat) || isNaN(lat)) { //If lat or lng is not a number we call the generic one
        alert('One of the fields were incorrect')
        getWeather();
    }
    else {
        return fetch('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/'+ lng +'/lat/' + lat + '/data.json')
        .then(response => response.json())
        .catch(function(error){
            alert(error) //Alert the error
            return Promise.reject(); //Reject the promise
            //https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
        }) 
    }
}