$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var long;
            var lat;

            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            $("#data").html("latitude " + lat + "<br/>longitude " + long);
        });
    }

    // var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long +'&appid=38082f3f9beb0b0911ceaab991e39d6f';
    var api = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=38082f3f9beb0b0911ceaab991e39d6f';

    $.getJSON(api, function(data){
        var fTemp;
        var cTemp;
        var kTemp;
        var tempSwap = true;

        var weatherType = data.weather[0].description;
        kTemp = data.main.temp;
        var windSpeed = data.wind.speed;
        var city = data.name;

        fTemp = (kTemp*(9/5)-459.67).toFixed(1);
        cTemp = (kTemp-273).toFixed(1);

        console.log(city);
        $('#city').html(city);
        $('#weatherType').html(weatherType);
        $('#fTemp').html(fTemp + " &#8457;");
        $('#fTemp').click(function(){
            
            if(tempSwap === false) {
                $('#fTemp').html(fTemp + " &#8457;");
                tempSwap = true;
            } else {
                $('#fTemp').html(cTemp + " &#8451;");
                tempSwap = false;
            }
        });

        $('#windSpeed').html(windSpeed);
    });
});