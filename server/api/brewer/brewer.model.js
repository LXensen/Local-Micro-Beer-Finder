'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BrewerSchema = new Schema({
	name: String,
    Address: {
		StreeNo: String,
		StreetName: String,
		City: String,
		Provice: String,
		Country: String,
		Postal: String
    },
    Contact: {
		Phone: String,
		email: String,
		url: String,
		twitter: String,
		facebook: String
    },
	logo: String
});

module.exports = mongoose.model('Brewer', BrewerSchema);