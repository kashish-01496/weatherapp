// window.alert("Hllo");
// 6a3cf7c1a90073bf806707d6224b4a51
// mine api key
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=6a3cf7c1a90073bf806707d6224b4a51

// amber abbas sir api key
// https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=0fde24f18909b27ce870124bbcdf96d5

async function weather(){
    let city = document.querySelector('#search>input').value;
    console.log(city);
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=6a3cf7c1a90073bf806707d6224b4a51";
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    cityname.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"Km/hr";
    console.log(data.weather[0].main);
    if(data.weather[0].main=="Mist"){
        document.querySelector('#main>img').src="mist.png"
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector('#main>img').src="clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        document.querySelector('#main>img').src="clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector('#main>img').src="drizzle.png";
    }
    else if(data.weather[0].main=="Haze"){
        document.querySelector('#main>img').src="haze.png";
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector('#main>img').src="rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector('#main>img').src="snow.png";
    }

}