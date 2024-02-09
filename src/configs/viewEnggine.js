import express from "express";

/*
config view enggine for the app
*/

let configViewEnggine = (app) => {
  app.use(express.static("./src/public"));
  app.set("view enggine", "ejs");
  app.set("views", "./src/views");
};

module.exports = configViewEnggine;
