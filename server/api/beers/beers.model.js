'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeersSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Beers', BeersSchema);