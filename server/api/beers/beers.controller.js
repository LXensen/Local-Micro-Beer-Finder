'use strict';

var _ = require('lodash');
var Beers = require('./beers.model');

// Get list of beerss
exports.index = function(req, res) {
  Beers.find(function (err, beerss) {
    if(err) { return handleError(res, err); }
    return res.json(200, beerss);
  });
};

// Get a single beers
exports.show = function(req, res) {
  Beers.findById(req.params.id, function (err, beers) {
    if(err) { return handleError(res, err); }
    if(!beers) { return res.send(404); }
    return res.json(beers);
  });
};

// Creates a new beers in the DB.
exports.create = function(req, res) {
  Beers.create(req.body, function(err, beers) {
    if(err) { return handleError(res, err); }
    return res.json(201, beers);
  });
};

// Updates an existing beers in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Beers.findById(req.params.id, function (err, beers) {
    if (err) { return handleError(err); }
    if(!beers) { return res.send(404); }
    var updated = _.merge(beers, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, beers);
    });
  });
};

// Deletes a beers from the DB.
exports.destroy = function(req, res) {
  Beers.findById(req.params.id, function (err, beers) {
    if(err) { return handleError(res, err); }
    if(!beers) { return res.send(404); }
    beers.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}