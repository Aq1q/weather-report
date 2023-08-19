const search = document.getElementById('location');
async function getData() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1e2ff4f6408445b3821114513231908 &q=${search.value}&aqi=yes`, {
        mode: 'cors'
    }
    )
    const json = await response.json();
    console.log(json);
}