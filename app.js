const api={
    key: '2fec126dba42d53816541d707c5dd971',
    base:'https://api.openweathermap.org/data/2.5/weather'
}
const getApi=city=>{
    fetch(`${api.base}?q=${city}&units=metric&appid=${api.key}`)
    .then(res=>res.json())
    .then(data=>Update(data))
}
document.getElementById("cityNameButton").addEventListener("click",function(){
    const city=document.getElementById("cityNameInput").value;
    getApi(city);
})

const Update=data=>{
    // console.log(data.name);
    // console.log(data.weather[0].main);
    // console.log(data);
    document.getElementById("cityName").innerText=data.name;
    document.getElementById("weather-main").innerText=data.weather[0].main;
    document.getElementById("temp").innerText=data.main.temp;
    document.getElementById("icon").setAttribute('src',`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    document.getElementById("cityNameInput").value="";
}