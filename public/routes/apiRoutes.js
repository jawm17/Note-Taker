const fs = require("fs");
var notes = require("../../db/db.json");
const path = require("path");

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        return res.json(notes);
    })
    app.post("/api/notes", function (req, res) {
        var newNote = {"id": Date.now(), ...req.body};
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(notes),function(err){
            if(err) return console.log("Something went wrong writing file");
        });
        res.send("Post Request");
    })
    app.delete("/api/notes/:id", function(req, res) {
        var noteID = req.params.id;
        function isNote(note){
            return note.id != noteID;
        }
        notes = notes.filter(isNote);
        fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(notes), function (err) {
            if (err) return console.log("Something went wrong writing delted file");
        });
        res.send("Delete Request");
    })
}