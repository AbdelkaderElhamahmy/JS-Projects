const key = 'adb239b73cfa55e2683ddafb01b42bb9';
let city = null;
let temp = null;
let weatherr = null;
const getWeather = async (id) => {
    const base ='http://api.openweathermap.org/data/2.5/weather?q='+id+'&appid='+key;
    const response = await fetch(base);
    const data = await response.json();
    console.log(data.Temperature);
    city = data.name;
    temp = (data.main.temp - 272.15).toFixed(2);
    weatherr = data.weather[0].main;
    let timeSrc= null;
    if(weather){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }
    timeSrc.setAttribute('src',timeSrc);
};
getWeather('london');