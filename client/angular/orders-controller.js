myApp.controller('ordersController', function ($scope, orderFactory, customerFactory) {
	$scope.orders = [];
	$scope.customers = [];

	updateCustomers();
	updateOrders();

	function updateCustomers(){
		customerFactory.getCustomers(function(output){
			$scope.customers = output;
		})
	}

	function updateOrders(){
		orderFactory.getOrders(function(output){
			$scope.orders = output;
		})
	}

	$scope.addOrder = function(){
		orderFactory.addOrder($scope.newOrder, function(output){
			updateOrders();
			$scope.newOrder = {};
		});
	}

});