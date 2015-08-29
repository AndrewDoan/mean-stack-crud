var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {

	show: function(req,res){
		Order.find({}, function(err, results){
			if(err){
				console.log(err);
			} else {
				res.json(results);
			}
		})
	},

	add: function(req,res){
		var mydate = new Date(); 
		var month = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"][mydate.getMonth()];
		var date_str = month + ' ' + mydate.getDate()+ " "+ mydate.getFullYear();

		var order = new Order({name: req.body.name, quantity: req.body.quantity, product: req.body.product, date: date_str})

		order.save(function(err, result){
			if(err){
				console.log("Error", err);
			} else {
				res.json(result);
			}
		})
	}
}