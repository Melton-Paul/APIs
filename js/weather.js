fetch("https://apis.scrimba.com/openweathermap/data/2.5/")
    .then(res => res.json())
    .then(data => console.log(data))