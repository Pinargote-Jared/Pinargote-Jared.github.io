/*(function () {
  var clockElement = document.getElementById( "clock" );
  function updateClock ( clock ) {
		clock.innerHTML = new  Date().toLocaleTimeString();
  }
	setInterval(function () {
		updateClock( clockElement );
  		}, 1000);
}());*/

var app = angular.module('myWeatherApp', []);

app.service('myWeatherApp', function($http) {
	this.getLoc = function() {
		return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
	};
	this.getWeather = function(city){
		var api = "http://api.openweathermap.org/data/2.5/weather?q=";
		var units = "&units=imperial";
		var appid = "&APPID=061f24cf3cde2f60644a8240302983f2"
		var cb = "&callback=JSON_CALLBACK";
		return $http.jsonp(api + city + units+ appid + cb);
	};
});


app.controller('myCtrl', function($scope, myWeatherApp) {
	$scope.Data = {};
	$scope.Data.unit = "F";
	$scope.Data.imperial = true;
	myWeatherApp.getLoc().success(function(data) {
		var city = data.city + ',' + data.country;
		$scope.Data.city = data.city;
		$scope.Data.region = data.region;
		
		myWeatherApp.getWeather(city).success(function(data){
			$scope.Data.temp = Math.round(data.main.temp);
			$scope.Data.F = $scope.Data.temp;
			$scope.Data.unit = "F";
			$scope.Data.des = data.weather[0].main;
			$scope.Data.C = Math.round(($scope.Data.temp -32) * (5/9));
			var icon = data.weather[0].icon;
			var url = ["http://openweathermap.org/img/w/", icon, ".png"]
			$scope.Data.icon = url.join('');
			$scope.Data.description = data.weather[0].description;
			
			});
		});
	
	$scope.Data.change = function(){
		
		if($scope.Data.imperial){
     $scope.Data.unit ='C';
     $scope.Data.temp = $scope.Data.C;
     return $scope.Data.imperial = false;
     }
    $scope.Data.unit ='F';
    $scope.Data.temp = $scope.Data.F;
		console.log("Called");
    return $scope.Data.imperial = true;
  	}

	
});