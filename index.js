const iniForm = document.getElementById('init-form');
iniForm.addEventListener('submit', (e) => {
    e.preventDefault();
    initialSearch(e.target[0].value);
    document.getElementById('init-form').style.display = 'none';
    document.getElementById('starter-screen').style.display = 'none';
})

function showSearch() {
    const element = document.getElementById('initial-form');
    element.style.display = 'flex';
}

async function initialSearch(search) {
    let json = await getData(search);
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

async function weatherApp(search) {
    let json = await getData(search);
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

async function getData(search) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1e2ff4f6408445b3821114513231908 &q=${search}&aqi=yes`, {
        mode: 'cors'
    }
    )
    let json = await response.json();
    return json;
}