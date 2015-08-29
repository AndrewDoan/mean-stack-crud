var orders = require('./../server/controllers/orders.js');
var customers = require('./../server/controllers/customers.js')

module.exports = function(app){

	app.get('/customers', function(req,res){
		customers.show(req,res);
	})

	app.get('/orders', function(req,res){
		orders.show(req,res);
	})

	app.post('/addCustomer', function(req,res){
		customers.add(req,res);
	})

	app.post('/addOrder', function(req,res){
		orders.add(req,res);
	})

	app.post('/removeCustomer', function(req,res){
		customers.remove(req,res);
	})
};