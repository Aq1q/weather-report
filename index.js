const search = document.getElementById('location');

async function weatherApp() {
    let json = await getData();
    let data = {
        country: json.location.country,
        city: json.location.name,
        feels_like: json.current.feelslike_c,
        temp: json.current.temp_c,
        wind_speed: json.current.wind_kph,
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