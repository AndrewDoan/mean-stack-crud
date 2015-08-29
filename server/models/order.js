var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	name: String,
	quantity: Number,
	product: String,
	date: String
});

mongoose.model('Order', OrderSchema);