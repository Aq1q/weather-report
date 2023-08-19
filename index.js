const search = document.getElementById('location');

async function weatherApp() {
    let json = await getData();
    let data = {
        country: json.location.country,
        time: json.location.localtime,
        city: json.location.name,
        feels_like: json.current.feelslike_c,
        gust: json.current.gust_kph,
        is_day: json.current.is_day,
        temp: json.current.temp_c,
        wind_speed: json.current.wind_kph,
        wind_direction: json.current.wind_dir,
        condition: json.current.condition.text,
        humidity: json.current.humidity
    }
    console.log(data);
}


async function getData() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1e2ff4f6408445b3821114513231908 &q=${search.value}&aqi=yes`, {
        mode: 'cors'
    }
    )
    let json = await response.json();
    return json;
}