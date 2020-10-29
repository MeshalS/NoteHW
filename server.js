/// express things
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 // assets had erro so we need to have the all assest files 
 app.use(express.static('public'));

let notes = [
    {
      title: 'hello',
      text: "test note from server",
      id: 1
    }
  ];

/// for public so as to connect to server 
  app.get("/", function(req, res) {
    res.json(path.join(__dirname, "./public/index.html"));
  });

 

/// nootes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
  
  // get the api for the note 
  app.get("/api/notes", function (req, res) {
    return res.json(notes);
  });
  // get the api for the note for delating  

  app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    // ading fillter 
     notes = notes.filter(note => note.id != +id);
  
    return res.json(notes)});
/// post for the note 
    app.post("/api/notes", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newTable = req.body;
      
        console.log(newTable);
      
        notes.push(newTable);
      
        res.json(newTable);
      });
      
      // Starts the server to begin listening
      // =============================================================

      // listening the port 
      app.listen(PORT, function () {
        console.log("App listening on PORT, http://localhost:" + PORT);
      });
      