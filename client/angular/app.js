var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'partials/orders.html'
		})
		.when('/customers',{
			templateUrl: 'partials/customers.html'
		})
		.otherwise({
			redirectTo: '/'
		})
});