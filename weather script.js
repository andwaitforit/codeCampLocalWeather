

//Weather App api key = b804f4d3e596f6dee05285c99ccb597d
//Weather API
//Get weather by location call api.openweathermap.org/data/2.5/weather?id=2655138&units=imperial&APPID=b804f4d3e596f6dee05285c99ccb597d
//Boston city id 2655138

 $(document).ready (function(){
//Check geolocation to get coords

//define weather + api key
var key = '&APPID=b804f4d3e596f6dee05285c99ccb597d';
var api = "http://api.openweathermap.org/data/2.5/weather?q=";
var city = "Boston"
var units = "&units=imperial"
var url = api+input.value()+units+key;
 
function setup(){

var button = select('#submit');
button.mousePressed(getWeather);

//var weather = api+city+"&"+units+"&"+key
//console.log(weather);
function getWeather(){

	//do not change anything below this line

$.getJSON(url).done(function(data){
	$('#temperature').html(data.main.temp);
	$('#location').html(data.name);
}).catch(function(error) {console.error(error)});



 };

 //do not change anything above this line
};
   };

  
 

//example from youtube *below*https://www.youtube.com/watch?v=4UoUqnjUC2c








//insert weather json city name into html

//$('#location').html(location);

//insert weather json temperature into html

//$('#temperature').html(temperature)

//or

//$(".city").text(location);

//$(".temperature").text(temperature); 

