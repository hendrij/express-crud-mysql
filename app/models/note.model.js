"user strict";
var sql = require("./sqldb.js");

//Note object constructor
var Note = function(note) {
  this.title = note.title;
  this.content = note.content;
  this.created_at = new Date();
};
Note.create = function createUser(newData, result) {
  sql.query("INSERT INTO notes set ?", newData, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};
Note.getById = function createUser(noteId, result) {
  sql.query("Select * from notes where id = ?", noteId, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res[0]);
    }
  });
};
Note.getAll = function getAllTask(result) {
  sql.query("Select * from notes", function(err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Note.updateById = function(id, note, result) {
  sql.query(
    "UPDATE notes SET title = ?, content = ? WHERE id = ?",
    [note.title, note.content, id],
    function(err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Note.remove = function(id, result) {
  sql.query("DELETE FROM notes WHERE id = ?", [id], function(err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Note;
