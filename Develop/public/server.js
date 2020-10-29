/// express things
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let notes = [
    {
      title: 'hello',
      text: "test note from server",
      id: 1
    }
  ];