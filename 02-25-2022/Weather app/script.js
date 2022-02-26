$(document).ready(function (){
    var URL ='http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=96381a872b1b405c5bf83b2ed63d9561&#39;';

    $.getJSON(URL,function (data){
        var type = data.weather[0].main;
        var id = data.weather[0].id;
        var city = data.name;

        var tempCel = Math.round(data.main.temp - 273.15);
        var tempC = tempCel + 'oC';
        var weather = data.weather[0].description;
        var tempF = Math.round(tempCel * (9/5) +32) + 'oF';
        var icon = data.weather[0].icon;
        var tempBool = true;

        $('#city').text(city);
        $('#temp').text(tempF);//Fahrenheit default
        var weatherIcon = 'http://openweathermap.org/img/wn/&#39;' + icon + '.png';
        $('#wIcon').html('<img src=' +weatherIcon+'>');
        $('#desc').text(weather);

        $('#btlToggle').on('click',function (){
            var temp = $('#temp');
            if (tempBool){
                temp.html(tempC);
                tempBool = false;
            }else {
                temp.html(tempF);
                tempBool = true;
            }
        });
    });
});