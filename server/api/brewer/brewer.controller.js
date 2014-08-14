'use strict';

var _ = require('lodash');
var Brewer = require('./brewer.model');

// Get list of brewers
exports.index = function(req, res) {
  Brewer.find(function (err, brewers) {
    if(err) { return handleError(res, err); }
    return res.json(200, brewers);
  });
};

// Get a single brewer
exports.show = function(req, res) {
  Brewer.findById(req.params.id, function (err, brewer) {
    if(err) { return handleError(res, err); }
    if(!brewer) { return res.send(404); }
    return res.json(brewer);
  });
};

// Creates a new brewer in the DB.
exports.create = function(req, res) {
  Brewer.create(req.body, function(err, brewer) {
    if(err) { return handleError(res, err); }
    return res.json(201, brewer);
  });
};

// Updates an existing brewer in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Brewer.findById(req.params.id, function (err, brewer) {
    if (err) { return handleError(err); }
    if(!brewer) { return res.send(404); }
    var updated = _.merge(brewer, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, brewer);
    });
  });
};

// Deletes a brewer from the DB.
exports.destroy = function(req, res) {
  Brewer.findById(req.params.id, function (err, brewer) {
    if(err) { return handleError(res, err); }
    if(!brewer) { return res.send(404); }
    brewer.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}