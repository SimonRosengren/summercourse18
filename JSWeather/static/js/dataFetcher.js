//Sends the api request and returns the promise
export function getWeather() {
    return fetch('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/13.0038/lat/55.6050/data.json')
        .then(response => response.json())
        .catch(function(error){
            alert(error);
            return Promise.reject(); //Reject the promise
        }) //Send as json down the chain 
}

//I could use the same method for both, and simply check wather latlng is provided but
//making two seperate functions feels to me more clear to other reading the code
//and shows that both alternatives exist
export function getWeatherLatLng(lat, lng) {
    if(isNaN(lat) || isNaN(lat)) { //If lat or lng is not a number we call the generic one
        alert('One of the fields were incorrect')
        getWeather();
    }
    else {
        console.log('yep')
        return fetch('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/'+ lng +'/lat/' + lat + '/data.json')
        .then(response => response.json())
        .catch(function(error){
            alert(error) //Alert the error
            return Promise.reject(); //Reject the promise
            //https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok
        }) 
    }
}