myApp.controller('customersController', function ($scope, customerFactory) {
	$scope.customers = [];

	updateCustomers();

	function updateCustomers(){
		customerFactory.getCustomers(function(output){
			$scope.customers = output;
		})
	}

	$scope.addCustomer = function(){
		customerFactory.addCustomer($scope.newCustomer, function(output){
		updateCustomers();
		$scope.newCustomer = {};
		}, function(err){
			$scope.err = err;
		});
	}

	$scope.removeCustomer = function(customer){
		customerFactory.removeCustomer(customer);
	}
});