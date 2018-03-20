//Weather App api key = b804f4d3e596f6dee05285c99ccb597d
//Weather API
//Get weather by location call api.openweathermap.org/data/2.5/weather?id=2655138&units=imperial&APPID=b804f4d3e596f6dee05285c99ccb597d
//Boston city id 2655138

 
//Check geolocation to get coords and get weather

function getLocation(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(location){
			var lat = (location.coords.latitude);
 			var lon = (location.coords.longitude);
 			var key = '&APPID=b804f4d3e596f6dee05285c99ccb597d';
			var api = "http://api.openweathermap.org/data/2.5/weather?";
			var units = "&units=imperial"
			var url = api+"lat="+lat+"&lon="+lon+units+key;
			console.log(url)
			console.log(location.coords)
			$.getJSON(url).done(function getWeather(data){
					var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
					var temperature = data.main.temp
					var temp = data.main.temp;
					var location = data.name
					var celTemp = ((data.main.temp-32)*5/9).toFixed(2);
console.log(temperature);
console.log(temp);
console.log(icon);
console.log(location);
console.log(celTemp);
			$("#location").html(location);
			$("#temperature").html( temp+ "&deg;F");
$("#icon").attr("src", icon);




				
$('#fTemp').click(function(){
	$("#temperature").html(temp + "&deg;F");
});
$('#cTemp').click(function(){
	$("#temperature").html(celTemp + "&deg;C");
});
})

			})

		}
		//location function and ajax call
	
	else{
		alert("Geolocation is not supported by this browser")
	};
};


//Good example
/*
https://codepen.io/beumsk/pen/Xpbyxv?editors=1010
*/

$(document).ready(function(){
getLocation();

})








//var weather = api+city+"&"+units+"&"+key
//console.log(weather);





//example from youtube *below*https://www.youtube.com/watch?v=4UoUqnjUC2c







