//using fs 

const fs = require('fs'); 
const path = require('path');


function readCoordinates(filename, callback){
    const filePath = path.resolve(__dirname, filename);
    console.log("Reading from file:", filePath);
    fs.readFile(filePath, 'utf-8', (err, data) =>{
        if(err){
            console.error("Error reading from file:", err);
            return;
        }
        try{
            const coordinates = JSON.parse(data);
            callback(coordinates);
        }
        catch(parseError){
            console.error("Error parsing data:", parseError);
        }
    });
}

function fetchWeatherData(latitude, longitude) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=rain,wind_speed_10m&hourly=uv_index,is_day`)
        .then(response => { 
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('API request failed');
            }
        })
        .then(data => {
           // console.log(data); 
		   parsedata(data);
        })
        .catch(error => { 
            console.error(error);
        });
}

function parsedata(data){
	const{
		latitude,
		longitude,
		timezone,
		elevation,
		current: {time,rain,wind_speed_10m},
		hourly: {time: hourlyTimes,uv_index, is_day}
	} = data; 
	
	
    const currentWeather = {
        time,
        rain,
        windSpeed: wind_speed_10m,
        latitude,
        longitude,
        timezone,
        elevation
    };

	const hourlyWeather = hourlyTimes.map((hour,index) =>({
		time:hour,
		uvIndex: uv_index[index],
		isDay: is_day[index]
	}));

	// Display the formatted data
	console.log("Current Weather:");
	console.log(currentWeather);

	// console.log("\nHourly Weather:");
	// hourlyWeather.forEach(hour => {
	// 	console.log(hour);
	// });

}
readCoordinates('coordinates.json', (coordinates) => {
    coordinates.forEach(coord => {
        fetchWeatherData(coord.latitude, coord.longitude);
    });
});


// Example of fetching weather data for different locations
//fetchWeatherData(53.3331, -6.2489); // Dublin, Ireland
// fetchWeatherData(40.71, -74.01); // New York City, USA
// fetchWeatherData(34.05, -118.25); // Los Angeles, USA
