var path = require("path");

module.exports = function(app){
    app.get("/notes", function(req,res){
        res.sendFile(path.join(__dirname, "../../Note-Taker/notes.html"))
    })


    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../../Note-Taker/index.html"))
    })
}