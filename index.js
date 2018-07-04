require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/Url");
mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);
if ((process.env.NODE_ENV = "production")) {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "/views/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
