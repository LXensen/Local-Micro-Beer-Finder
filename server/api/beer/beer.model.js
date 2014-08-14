'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var BeersSchema = new Schema({
  name: String,
  description: String,
  specs: {
  	ABV: Number,
  	IBU: Number,
  	OG: Number,
  	FG: Number
  }
});

module.exports = mongoose.model('Beer', BeersSchema);