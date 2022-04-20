fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather/?q=springfield&units=imperial")
    .then(res => res.json())
    .then(data => console.log(data))