require("dotenv").config();
const express = require("express");

const app =express();
app.use(express.json());
const connectDb = require("./config/connectDb");
const route = require("./routing/notesRoute");

connectDb();    //connect to Db

app.get("/notes" ,route.fetchNotes);

app.get('/notes/:id' , route.fetechNote);

app.post("/notes",route.createNote);

app.put("/notes/:id",route.updateNote);

app.delete("/notes/:id",route.deleteNote);

app.listen(process.env.PORT);