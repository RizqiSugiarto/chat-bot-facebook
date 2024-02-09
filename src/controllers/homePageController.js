require("dotenv").config();

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

let getHomePage = (req, res) => {
  return res.render("homepage.ejs");
};

let getWebHook = (req, res) => {
  let VERIFY_TOKEN = MY_VERIFY_TOKEN;

  // Parse the query params
  let mode = req.query["hub.mode"];
  let token = req.query["hub.verify_token"];
  let challenge = req.query["hub.challenge"];

  // Check if a token and mode is in the query string of the request
  if (mode && token) {
    // Check the mode and token sent is correct
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log(VERIFY_TOKEN, "SINI DALEM");
      // Respond with the challenge token from the request
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      // Respond with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
};

let postWebHook = (req, res) => {
  let body = req.body;

  if (body.object === "page") {
    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Return a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
};

module.exports = {
  getHomePage: getHomePage,
  getWebHook: getWebHook,
  postWebHook: postWebHook,
};
