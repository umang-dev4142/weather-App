async function weather() {
    let cityName = document.getElementById('city').value;
    //    alert(cityName)
    let key = '32cf5a38f33187583d9c7050cb55bda8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
    let res = await fetch(url);
    let data= await res.json();
    let temp  = data.main.temp;
    let city= data.name;
    let wind= data.wind.speed;
    let humidity= data.main.humidity;
    document.getElementById('cn').innerHTML=`${city}`;
    document.getElementById('temperature').innerHTML=`${'Temp -'+temp }℃`;
    document.getElementById('ws').innerHTML=`${'Wind Speed -'+wind}km/hr`;
    document.getElementById('humi').innerHTML=`${'Humidity - '+humidity}%`;
    let a= data.weather[0].main;
    let img = document.getElementById('img');
    if(a=='clouds'){
        img.setAttribute('res','images/clouds.png');
    }else if(a =='rain'){
        img.setAttribute('src','images/rain.png')
    }




}