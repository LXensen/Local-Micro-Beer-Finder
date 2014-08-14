'use strict';

var _ = require('lodash');
var Establishments = require('./establishments.model');

// Get list of establishmentss
exports.index = function(req, res) {
  Establishments.find(function (err, establishmentss) {
    if(err) { return handleError(res, err); }
    return res.json(200, establishmentss);
  });
};

// Get a single establishments
exports.show = function(req, res) {
  Establishments.findById(req.params.id, function (err, establishments) {
    if(err) { return handleError(res, err); }
    if(!establishments) { return res.send(404); }
    return res.json(establishments);
  });
};

// Creates a new establishments in the DB.
exports.create = function(req, res) {
  Establishments.create(req.body, function(err, establishments) {
    if(err) { return handleError(res, err); }
    return res.json(201, establishments);
  });
};

// Updates an existing establishments in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Establishments.findById(req.params.id, function (err, establishments) {
    if (err) { return handleError(err); }
    if(!establishments) { return res.send(404); }
    var updated = _.merge(establishments, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, establishments);
    });
  });
};

// Deletes a establishments from the DB.
exports.destroy = function(req, res) {
  Establishments.findById(req.params.id, function (err, establishments) {
    if(err) { return handleError(res, err); }
    if(!establishments) { return res.send(404); }
    establishments.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}