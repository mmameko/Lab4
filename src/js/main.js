//= ../../bower_components/angular/angular.js
//= ../../bower_components/angular-route/angular-route.js

var app = angular.module("app", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider.when('/settings',
        {
            templateUrl: "../../html/content/templates/settings.html",
			controller: "SettingsCtrl"
        });
		
		$routeProvider.when('/test',
        {
            templateUrl: "../../html/content/templates/test.html",
			controller: "TestCtrl"
        });
        $routeProvider.otherwise({redirectTo: '/settings'});
	});
	
//= controllers/settingsCtrl.js
//= controllers/testCtrl.js
	
app.controller("MainCtrl", function($scope){
	$scope.checkClick = function(e){
		console.log("Check clicked!");
	};
});

