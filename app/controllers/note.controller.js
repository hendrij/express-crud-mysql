"use strict";
const Note = require("../models/note.model.js");

exports.findAll = function(req, res) {
  Note.getAll(function(err, task) {
    if (err) res.send(err);
    res.send(task);
  });
};

exports.create = function(req, res) {
  const newData = new Note(req.body);
  //handles null error
  if (!newData.title || !newData.content) {
    res
      .status(400)
      .send({ error: true, message: "Please provide title and content" });
  } else {
    Note.create(newData, function(err, noteId) {
      if (err) res.send(err);
      res.json({ message: "Note successfully created" });
    });
  }
};

exports.findOne = function(req, res) {
  Note.getById(req.params.noteId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  const updateData = new Note(req.body);
  //handles null error
  if (!updateData.title || !updateData.content) {
    res
      .status(400)
      .send({ error: true, message: "Please provide title and content" });
  } else {
    Note.updateById(req.params.noteId, updateData, function(err, task) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Note successfully updated" });
    });
  }
};

exports.delete = function(req, res) {
  Note.remove(req.params.noteId, function(err, task) {
    if (err) res.send(err);
    res.json({ message: "Note successfully deleted" });
  });
};
