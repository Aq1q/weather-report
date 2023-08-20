const iniForm = document.getElementById('init-form');
iniForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = await weatherApp(e.target[0].value);
    document.getElementById('form-box').style.display = 'none';
    document.getElementById('starter-screen').style.display = 'none';
    render(data);
    document.getElementById('data-display').style.display = 'flex';

})

const formBox = document.getElementById('form-box').addEventListener('click', (e) => {
    if (e.target == document.getElementById('form-box')) {
        e.target.style.display = "none";
    }
})

function showSearch() {
    const element = document.getElementById('form-box');
    element.style.display = 'flex';
}

async function weatherApp(search) {
    let json = await getData(search);
    let data = {
        country: json.location.country,
        city: json.location.name,
        feels_like: json.current.feelslike_c,
        temp: json.current.temp_c,
        wind_speed: json.current.wind_kph,
        condition_icon: json.current.condition.icon,    
        condition: json.current.condition.text,
        humidity: json.current.humidity
    }
    return data
}

async function getData(search) {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1e2ff4f6408445b3821114513231908 &q=${search}&aqi=yes`, {
            mode: 'cors'
        }
        )
        let json = await response.json();
        return json;
}

function render(data) {
    const city = document.getElementById('city');
    city.innerText = data.city;

    const country = document.getElementById('country');
    country.innerText = data.country;

    const conditionImg = document.getElementById('condition-img');
    conditionImg.src = data.condition_icon;

    const condition = document.getElementById('condition');
    condition.innerText = data.condition;

    const temp = document.getElementById('temp');
    temp.innerText = data.temp;

    const wind = document.getElementById('wind-data');
    wind.innerText = data.wind_speed;

    const humidity = document.getElementById('humidity-data');
    humidity.innerText = data.humidity

    const feeling = document.getElementById('feeling-data');
    feeling.innerText = data.feels_like;

}