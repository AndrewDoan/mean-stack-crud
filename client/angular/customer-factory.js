myApp.factory('customerFactory', function($http){

	var customers = [];
	var factory = {};

	factory.getCustomers = function(callback){
		$http.get('/customers').success(function(output){
			customers = output;
			callback(customers);
		})
	}
	factory.addCustomer = function(info, callback, err){
		$http.post('/addCustomer', info).success(function(result){
			console.log(result);
			if(typeof(result) == "string"){
				err(result);
			} else{
			customers.push({name: result.name, _id: result._id});
			callback(customers);
			}
		})
	}

	factory.removeCustomer = function(customer){
		$http.post('/removeCustomer', customer).success(function(){
			for(var i = 0; i< customers.length; i++){
				if(customers[i]._id == customer._id){
					customers.splice(i, 1);
				}
			}
		})
	}
	return factory;
})