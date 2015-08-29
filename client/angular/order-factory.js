myApp.factory('orderFactory', function($http){
	var orders = [];
	var factory = {};

	factory.getOrders = function(callback){
		$http.get('/orders').success(function(output){
			orders = output;
			callback(orders);
		})
	}

	factory.addOrder = function(info, callback){
		$http.post('/addOrder', info).success(function(output){
			orders.push({name: output.name, quantity: output.quantity, product: output.product, date: output.date});
			callback(orders);
		})
	}

	return factory;
})