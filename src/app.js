require("dotenv").config();
import express from "express";
import configViewEnggine from "./configs/viewEnggine";
import initWebRoute from "./routes/web";

let app = express();

//config view enggine
configViewEnggine(app);

//init web routes
initWebRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`chat bot server is running now at the port ${port}`);
});
